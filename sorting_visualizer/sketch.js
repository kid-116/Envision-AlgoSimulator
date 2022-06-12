    var arr = [3, 2, 8, 9, 5, 6, 4, 4,20, 7, 21, 16, 17, 18, 15,16, 14, 13, 11, 10]
    var maxi = -10000, but = true;
    for(var i = 0; i < 20; i++)
    {
        if (arr[i] > maxi)
        {
            maxi = arr[i];
        }
    }
    var platformHeight = 20;
    var barWidth , barHeight;
    function setup() {    
    barWidth = (windowWidth-20)/20;
        let cnv = createCanvas(windowWidth, windowHeight-100);
        cnv.position(0,100)
        fill(250)
        rect(0, windowHeight-platformHeight-100 , windowWidth, platformHeight)
        strokeWeight(1);
        for(var i = 0; i < 20; i++)
        {
            console.log(344)
            textSize(25);
            textAlign(CENTER);
            barHeight = (arr[i]/maxi)*(windowHeight-145);
            text(arr[i], 10 + i*barWidth + barWidth/2, windowHeight-125-barHeight);
            
            rect(10 + i*barWidth, windowHeight-120-barHeight, barWidth, barHeight);
        }
        slider = createSlider(-33, 100, 25);
        slider.position(40, 80);
    }
    function pasit()
    {
        bub = 0, moveR = 0, moveL = 0, fixed = 0;
        arr = [];
        arr.length = 0;
        while(arr.length < 20){
            var r = int(random(0, 20)) ;
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        fill(250)
        background(31,31,31)
        rect(0, windowHeight-platformHeight-100 , windowWidth, platformHeight)
        strokeWeight(1);
        for(var i = 0; i < 20; i++)
        {
            textSize(25);
            textAlign(CENTER);
            barHeight = (arr[i]/maxi)*(windowHeight-145);
            text(arr[i], 10 + i*barWidth + barWidth/2, windowHeight-125-barHeight);
            rect(10 + i*barWidth, windowHeight-120-barHeight, barWidth, barHeight);
        }
        but = true
    }
    function sor()
    {
        but = false
        redraw()
    }
    var bub = 0, moveR = 0, moveL = 0, fixed = 0;
    function draw()
    {
        if (!but)
        {
            loop()
        }
        else noLoop();
        background(31,31,31);
        fill(250)
        rect(0, windowHeight-platformHeight-100 , windowWidth, platformHeight)
        
        for(var i = 0; i < 20; i++)
        {
            
            if ((i != bub) && (i != bub+1))
            {
                if (i >= 20 - fixed)
                {
                    fill(0,255,0,220)
                }
                else
                {
                    fill(250)
                }
                barHeight = (arr[i]/maxi)*(windowHeight-145);
                textSize(25);
                textAlign(CENTER);
                text(arr[i], 10 + i*barWidth + barWidth/2, windowHeight-125-barHeight);
                rect(10 + i*barWidth, windowHeight-120-barHeight, barWidth, barHeight);
            }  
        }
        if (fixed >= 20)
        {
            
            fill(0,255,0,220)
            textSize(25);
            textAlign(CENTER);
            barHeight = (arr[1]/maxi)*(windowHeight-145);
            text(arr[1], 10 + 1*barWidth + barWidth/2, windowHeight-125-barHeight);
            
            rect(10 + 1*barWidth, windowHeight-120-barHeight, barWidth, barHeight);
            barHeight = (arr[0]/maxi)*(windowHeight-145);
            text(arr[0], 10 + barWidth/2, windowHeight-125-barHeight);
            rect(10 , windowHeight-120-barHeight, barWidth, barHeight);
            noLoop();
        }
        if (arr[bub] > arr[bub+1])
        {
            
            fill(0,255,0,150)
            textSize(25);
            textAlign(CENTER);
            barHeight = (arr[bub]/maxi)*(windowHeight-145);
            text(arr[bub], 10 + bub*barWidth + barWidth/2 + moveR, windowHeight-125-barHeight);
            
            rect(10 + bub*barWidth + moveR, windowHeight-120-barHeight, barWidth, barHeight);
            
            barHeight = (arr[bub+1]/maxi)*(windowHeight-145);
            text(arr[bub+1], 10 + (bub+1)*barWidth + barWidth/2 + moveL, windowHeight-125-barHeight);
            
            rect(10 + (bub+1)*barWidth + moveL, windowHeight-120-barHeight, barWidth, barHeight);
        }
        else if (fixed < 19)
        {
            fill(0,255,0,150)
            textSize(25);
            textAlign(CENTER);
            barHeight = (arr[bub]/maxi)*(windowHeight-145);
            text(arr[bub], 10 + bub*barWidth + barWidth/2, windowHeight-125-barHeight);
            rect(10 + bub*barWidth, windowHeight-120-barHeight, barWidth, barHeight);
            barHeight = (arr[bub+1]/maxi)*(windowHeight-145);
            text(arr[bub+1], 10 + (bub+1)*barWidth + barWidth/2, windowHeight-125-barHeight);
            rect(10 + (bub+1)*barWidth, windowHeight-120-barHeight, barWidth, barHeight);
            
        }
        if (moveR < barWidth)
        {
            moveR += (1 + slider.value()*3/100);
            moveL -= (1 + slider.value()*3/100);
        }
        else
        {
            if (arr[bub] > arr[bub+1])
            {
            var tem = arr[bub];
            arr[bub] = arr[bub+1];
            arr[bub + 1] = tem;
            }
            bub++;
            sleep(350 - slider.value()*5/2)
            if (bub >= 19 - fixed)
            {
                bub = 0;
                fixed++;
            }
            moveR = 0, moveL = 0;
        }
        frameRate(144)
    }
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }