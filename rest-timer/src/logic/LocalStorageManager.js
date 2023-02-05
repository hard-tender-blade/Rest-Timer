export default class StorageManager {

    static UserStorage = [
        {Name: "UserWorkSessionTime",         DefaultValue: 45, },
        {Name: "UserRestSessionTime",         DefaultValue: 10, },
        {Name: "AllTimeInWork",               DefaultValue: 0,  },
        {Name: "AllTimeInRest",               DefaultValue: 0,  },
        {Name: "CountOfCorrectWorkSession",   DefaultValue: 0,  },
        {Name: "CountOfInCorrectWorkSession", DefaultValue: 0,  },
        {Name: "CountOfRestSession",          DefaultValue: 0,  },
    ]

    //create local storage for new user
    static CreateUserLocalStorage = () => {
        if(localStorage.length !== this.UserStorage.length) {
            this.UserStorage.forEach(element => 
                localStorage.setItem(element.Name, element.DefaultValue))

            console.log("User local storage created.")
        }
    }

    static GetAllUserStoreageInfo = () => {
        return {
            UserWorkSessionTime: this.GetUserWorkSessionTime(),
            UserRestSessionTime: this.GetUserRestSessionTime(),
            AllTimeInWork: this.GetUserAllTimeInWork(),
            AllTimeInRest: this.GetUserAllTimeInRest(),
            CountOfCorrectWorkSession: this.GetUserCountOfCorrectWorkSession(),
            CountOfInCorrectWorkSession: this.GetUserCountOfInCorrectWorkSession(),
            CountOfRestSession: this.GetUserCountOfRestSession(),
        }
    }

    static GetUserWorkSessionTime = () => parseInt(localStorage.getItem("UserWorkSessionTime"))
    static GetUserRestSessionTime = () => parseInt(localStorage.getItem("UserRestSessionTime"))
    static GetUserAllTimeInWork = () => parseInt(localStorage.getItem("AllTimeInWork"))
    static GetUserAllTimeInRest = () => parseInt(localStorage.getItem("AllTimeInRest"))
    static GetUserCountOfCorrectWorkSession = () => parseInt(localStorage.getItem("CountOfCorrectWorkSession"))
    static GetUserCountOfInCorrectWorkSession = () => parseInt(localStorage.getItem("CountOfInCorrectWorkSession"))
    static GetUserCountOfRestSession = () => parseInt(localStorage.getItem("CountOfRestSession"))


    static AddRestTime = (time) => localStorage.setItem("AllTimeInRest", (this.GetUserAllTimeInRest() + time))
    static AddWorkTime = (time) => localStorage.setItem("AllTimeInWork", (this.GetUserAllTimeInWork() + time))

    static AddOneRestSession = () => localStorage.setItem("CountOfRestSession", (this.GetUserCountOfRestSession() + 1))
    static AddOneWorkCorrectSession = () => localStorage.setItem("CountOfCorrectWorkSession", (this.GetUserCountOfCorrectWorkSession() + 1))
    static AddOneWorkInCorrectSession = () => localStorage.setItem("CountOfInCorrectWorkSession", (this.GetUserCountOfInCorrectWorkSession() + 1))
}




