class PlayerData {
    id: number;
    name: string;
    score: number;

    constructor(id: number) {
        this.id = id;
        this.name = 'Player';
        this.score = 0;
    }
}

export default PlayerData;