// 定义接口来表示角色数据
interface ICharacter {
    url: string;
    name: string;
    gender: string;
    culture: string;
    born: string;
    died: string;
    titles: string[];
    aliases: string[];
}

// 用于在页面上显示角色的函数
function displayCharacters(characters: ICharacter[]): void {
    const container = document.getElementById('characters') as HTMLDivElement;
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.textContent = character.name; // 可以添加更多的详细信息
        container.appendChild(characterElement);
    });
}

// 获取角色并显示它们
function fetchCharacters(): void {
    const url = 'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50';
    fetch(url)
        .then(response => {
            // 确保响应成功
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json() as Promise<ICharacter[]>;
        })
        .then(characters => {
            // 在这里处理角色数据
            displayCharacters(characters);
        })
        .catch(error => {
            console.error('Fetching characters failed', error);
        });
}

// 调用函数
fetchCharacters();
