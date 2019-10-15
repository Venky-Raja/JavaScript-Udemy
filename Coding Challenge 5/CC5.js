var john = {
    fullName: 'John Smith',
    billJohn: [124, 48, 268, 180, 42],
    calcTip: function(){
        
        this.tip = [];
        this.finalBills = [];
        
        for(var i = 0; i < this.billJohn.length; i++){
            
            var per;
            var bills = this.billJohn[i];
            
            if (bills < 50) per = 0.2;
            else if (bills >= 50 && bills <= 200) per = 0.15;
            else per = 0.1;
            
            this.tip[i] = bills * per;
            this.finalBills[i] = bills + (this.tip[i]);
        }
    }
}

var mark = {
    fullName: 'Mark Williams',
    billMark: [77, 375, 110, 45],
    calcTip: function(){
        
        this.tip = [];
        this.finalBills = [];
        
        for(var i = 0; i < this.billMark.length; i++){
            
            var per;
            var bills = this.billMark[i];
            
            if (bills < 50) per = 0.2;
            else if (bills >= 50 && bills <= 200) per = 0.15;
            else per = 0.1;
            
            this.tip[i] = bills * per;
            this.finalBills[i] = bills + (this.tip[i]);
        }
    }
}

var calcAvg = function (ar){
    
    var sum = 0;
    
    for (var i = 0; i < ar.length; i++)
        {
            sum = sum + ar[i];
        }
    return sum / ar.length;
}


john.calcTip();
mark.calcTip();

john.average = calcAvg(john.tip);
mark.average = calcAvg(mark.tip);

console.log(john, mark);

if(john.average > mark.average){
    console.log ('John\'s family paid more average tips with ' + john.average + ' tips.')
} else if (mark.average > john.average){
     console.log ('Mark\'s family paid more average tips with ' + mark.average + ' tips.')
} else {
     console.log ('Both families paid equal average tip with ' + john.average + ' tips.')
}