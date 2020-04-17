// does not implement OnInit this is not a component class
export class Article {
    title: string;
    link: string;
    votes: number;

    // question mark is similar to overloading in java where the ? parameter is optional 
    constructor(title: string, link: string, votes?: number)
    {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    
    voteUp(): void {
        this.votes += 1;
    }
    
    voteDown(): void {
        this.votes -= 1;
    }

    domain(): string {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch(err) {
            return null;
        }
    }
}