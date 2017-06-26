export default class {
    constructor(){
        this.allCards = this.generatePoker()
    }

    /*初始化扑克牌*/
    generatePoker(){
        let cardType = ['黑桃','红桃','梅花','方块'];

        let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        let specialcard =[['大王',53],['小王',54]]

        var allCards = [];

        for(let i = 0,len1 = cardType.length;i<len1;i++){
            for(let j = 0,len2 = cardValue.length;j<len2;j++){
                let temp = new Object()
                temp.name = cardType[i]+cardValue[j]
                allCards.push(temp);
            }
        }

        for(let i = 0;i<allCards.length;i++){
            allCards[i].number = i;

            if(i%13<10){
                allCards[i].grade = i%13+1
            }else {
                allCards[i].grade = 10
            }

        }

        // allCards = allCards.concat(specialcard);
        
        return allCards

    }

    // 洗牌算法，传入一个数组，随机乱序排列,不污染原数组
    shuffle(arr) {
        if (!arr) {
            throw '错误，请传入正确数组';
        }

        let newArr = arr.slice(0);
        for (let i = newArr.length - 1; i >= 0; i--) {
            // 随机范围[0,1)
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let itemAtIndex = newArr[randomIndex];
            newArr[randomIndex] = newArr[i];
            newArr[i] = itemAtIndex;
        }

        return newArr;
    }

    /*随机发N张扑克牌*/
    dealPoker(num){

        let i = this.allCards.length==52?52:54;

        if(!num||num>i||typeof (num)!=='number'){
            throw '错误，传入数字非法，需要是[1-'+i+']'
        }

        let allCards = this.generatePoker();

        var randomCards = this.shuffle(allCards)

        return randomCards.slice(0,num)
    }

    //

}