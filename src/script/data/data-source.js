import clubs from './clubs.js';
class DataSource {
    // constructor(onSuccess, onFailed) {
    //     this.onSuccess = onSuccess;
    //     this.onFailed = onFailed;
    // }
    // static searchClub(keyword) {
    //     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
    //     console.log(filteredClubs.length);
    //     if (filteredClubs.length) {
    //         this.onSuccess(filteredClubs);
    //     } else {
    //         this.onFailed(`${keyword} is not found`);
    //     }
    // }

    static searchClub(keyword) {
        return new Promise((resolve, reject) => {
            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredClubs.length) {
                resolve(filteredClubs)
            } else {
                reject(`${keyword} is not found`);
            }
        })
    }
}

export default DataSource;