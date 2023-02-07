const qnaList=[
    {
        q:"진실의 마법거울이 너에게 물어본다, 너는 누구인가?",
        a:[
            {
                answer:"왕자",
                type:"M",
            },
            {
                answer:"공주",
                type:"W",
            },
        ],
    },

    {
        q:"계모가 모든 집안일을 다 시킨다 나는 어떻게 할 것인가?",
        a:[
            {
                answer:"너무 속상하다 숲속 친구들과 노래하며 위안삼는다",
                type:"FT",
            },
            {
                answer:"어쩔 수 없지 엄마 말은 잘 듣는다",
                type:"FT",
            },
        ],
    },

    {
        q:"3일 후 열리는 무도회장에 초청받았다. 당신의 행동은?",
        a:[
            {
                answer:"미리 입고 갈 최고급 원단 의상을 준비해야겠다",
                type:"JP"
            },
            {
                answer:"당일에 친한 공주/왕자에게 빌리자!",
                type:"JP",
            },
        ],
    },

    {
        q:"새언니는 무도회장에 초청을 받지 못했다. 어떻게 하지?",
        a:[
            {
                answer:"다음엔 갈 수 있을거라고 위로해준다",
                type:"FT",
            },
            {
                answer:"‘니가 못났으니까 못 가지’ 속으로 생각한다.",
                type:"FT",
                
            },
        ],
    },

    {
        q:"무도회장에서 운명적으로 나와 결혼할 왕자/공주를 만날 수 있을까?",
        a:[
            {
                answer:"어디계시나요 저의 왕자/공주님?",
                type:"SN",
            },
            {
                answer:"운명적인 만남은 없어..",
                type:"SN",
            },
        ],
    },

    {
        q:"무도회장을 가는 길에 길을 잃었다. 어떻게 해결하지?",
        a:[
            {
                answer:"앞에 모르는 사람들에게 길을 물어보자!",
                type:"IE",
            },
            {
                answer:"안내 표지판과 지도를 보며 찾아가자!",
                type:"IE",
            },
        ],
    },

    {
        q:"무도회장을 가는 길에 새로운 길을 발견한다. 어떻게 할 것인가? ",
        a:[
            {
                answer:"앞으로 나에게 환상적인 일이 펼쳐질 것만 같다. 가본다!",
                type:"SN",
            },
            {
                answer:"새로운 모험은 너무 위험해!",
                type:"SN",
            },
        ],

    },

    {
        q:"휴..무사히 무도회장에 도착했다!",
        a:[
            {
                answer:"피곤해.. 벌써부터 집에 가고 싶다",
                type:"IE",
            },
            {
                aswer:"와 무도회장이라니 너무 신난다! 다른 사람들이랑 사진도 찍고 이야기 나누어야지~!",
                type:"IE",
            },
        ],
    },

    {
        q:"무도회장에서 마음에 드는 왕자/공주를 만난다면? ",
        a:[
            {
                answer:"적극적으로 말을 걸어 나의 마음을 표현한다",
                type:"IE",
            },
            {
                answer:"멀리서 지켜본다",
                type:"IE",
            },
        ],
    },
    {
        q:"무도회가 끝난 후, 내가 좋아하는 공주/왕자가 다른 사람에게 관심이 있지만 친해지기 어렵다며 나에게 털어놓는다. 어떻게 할까? ",
        a:[
            {
                answer:"마음이 아프더라도 공감해주고 응원해준다",
                type:"FT",
            },
            {
                answer:"이어질 수 없다며 밑밥을 깐다",
                type:"FT",
            },
        ],
    },

    {
        q:"어찌저찌 무도회장에서 마음에 든 이웃나라 왕자/공주와 다음 만남을 기약했다. 뭘하면 좋을까?",
        a:[
            {
                answer:"데이트 코스를 미리 정해보자!",
                type:"JP",
            },
            {
                answer:"나는 즉흥적으로 가고 싶은 곳에 갈래!",
                type:"JP",
            },
        ],
    },

    {
        q:"계모가 사전 허락없이 궁전에서 나가지 말라고 한다. 하지만 공주/왕자가 데이트를 위해 찾아온다면?",
        a:[
            {
                answer:"철저히 준비된 계획대로 함께 도망치자!",
                type:"JP",
            },
            {
                answer:"일단 뛰고 보자!",
                type:"JP",
            },
        ],
    },

    {
        q:"이웃나라 왕자/공주와 데이트를 하게 된 당신, 식사를 주문하려고 한다.",
        a:[
            {
                answer:"새로운 메뉴를 먹어보자!",
                type:"SN",
            },
            {
                answer:"안전한게 좋아! 항상 먹던 메뉴를 주문할래",
                type:"SN",
            },
        ],
    }

]

//마지막 결과 부분
var infoList = [

]