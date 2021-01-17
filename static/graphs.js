var trace1 = {
  x: ['Liam', 'Sophie', 'Jacob', 'Mia', 'William', 'Olivia'],
  y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0],
  type: 'bar',
  marker: {
    color: 'rgb(142,124,195)'
  }
};

var data = [trace1];

var layout = {
  font:{
    family: 'Raleway, sans-serif'
  },
  showlegend: false,
  xaxis: {
    tickangle: -45
  },
  yaxis: {
    zeroline: false,
    gridwidth: 2
  },
  bargap :0.05
};

Plotly.newPlot('myDiv', data, layout);




var trace_Musical_ShoutOut = {mode: "lines", name: "ShoutOut", x: [1927, 1947, 1967, 1987, 2007], y: [191, 196, 200, 199, 200], marker: {color: "#03f7ad"} }
var trace_Musical_DeadpanSnarker = {mode: "lines", name: "DeadpanSnarker", x: [1927, 1947, 1967, 1987, 2007], y: [173, 199, 198, 190, 199], marker: {color: "#f7acc8"} }
var trace_Musical_RunningGag = { mode: "lines", name: "RunningGag", x: [1927, 1947, 1967, 1987, 2007], y: [192, 134, 186, 197, 180], marker: {color: "#a89f08"} }

var trace_Horror_BigBad = {mode: "lines", name: "BigBad", x: [1910, 1930, 1950, 1970, 1990, 2010], y: [196, 192, 200, 200, 199, 200], marker: {color: "#4f00d0"} }
var trace_Horror_ShoutOut = {mode: "lines", name: "ShoutOut", x: [1910, 1930, 1950, 1970, 1990, 2010], y: [0, 179, 178, 197, 200, 199], marker: {color: "#34e8e7"} }
var trace_Horror_AssholeVictim = { type: "scatter", mode: "lines", name: "AssholeVictim", x: [1910, 1930, 1950, 1970, 1990, 2010], y: [0, 175, 181, 199, 198, 194], marker: {color: "#ed8596"} }

var trace_Comedy_ShoutOut = { type: "scatter", mode: "lines", name: "ShoutOut", x: [1902, 1922, 1942, 1962, 1982, 2002], y: [0, 193, 199, 200, 200, 200], line: {color: "#8e4c94"} }
var trace_Comedy_RunningGag = { type: "scatter", mode: "lines", name: "RunningGag", x: [1902, 1922, 1942, 1962, 1982, 2002], y: [160, 198, 200, 199, 195, 197], line: {color: "#4c3db2"} }
var trace_Comedy_BigBad = { type: "scatter", mode: "lines", name: "BigBad", x: [1902, 1922, 1942, 1962, 1982, 2002], y: [0, 0, 155, 193, 199, 199], line: {color: "#cb5517"} }

var trace_Drama_BittersweetEnding = { type: "scatter", mode: "lines", name: "BittersweetEnding", x: [1874, 1894, 1914, 1934, 1954, 1974, 1994, 2014], y: [0, 0, 175, 197, 198, 199, 199, 200], line: {color: "#e5dbfa"} }
var trace_Drama_ShoutOut = { type: "scatter", mode: "lines", name: "ShoutOut", x: [1874, 1894, 1914, 1934, 1954, 1974, 1994, 2014], y: [0, 0, 129, 176, 197, 200, 200, 199], line: {color: "#09015d"} }
var trace_Drama_Foreshadowing = { type: "scatter", mode: "lines", name: "Foreshadowing", x: [1874, 1894, 1914, 1934, 1954, 1974, 1994, 2014], y: [0, 0, 130, 195, 192, 197, 198, 198], line: {color: "#fa36b2"} }

var trace_Documentary_StockFootage = { type: "scatter", mode: "lines", name: "StockFootage", x: [1874, 1894, 1914, 1934, 1954, 1974, 1994, 2014], y: [0, 0, 0, 0, 193, 200, 199, 200], line: {color: "#b52c50"} }
var trace_Documentary_TalkingHeads = { type: "scatter", mode: "lines", name: "TalkingHeads", x: [1874, 1894, 1914, 1934, 1954, 1974, 1994, 2014], y: [0, 0, 0, 0, 196, 199, 200, 198], line: {color: "#4e172f"} }
var trace_Documentary_TheKenBurnsEffect = { type: "scatter", mode: "lines", name: "TheKenBurnsEffect", x: [1874, 1894, 1914, 1934, 1954, 1974, 1994, 2014], y: [0, 0, 0, 0, 195, 197, 198, 197], line: {color: "#9879ff"} }

var trace_News_AdamWesting = { type: "scatter", mode: "lines", name: "AdamWesting", x: [2006], y: [200], line: {color: "#b2b3ba"} }
var trace_News_AstroTurf = { type: "scatter", mode: "lines", name: "AstroTurf", x: [2006], y: [199], line: {color: "#72737e"} }
var trace_News_GlobalWarming = { type: "scatter", mode: "lines", name: "GlobalWarming", x: [2006], y: [198], line: {color: "#21d84d"} }

trace_BigBad = { x: ['force', 'discover', 'lead', 'name', 'police', 'murder', 'fight', 'turn', 'town', 'plan'], y: [242, 211, 211, 208, 199, 198, 198, 194, 190, 189], type: "bar", marker: {color: "#58d70e"} }
trace_HeroicSacrifice = { x: ['war', 'force', 'discover', 'save', 'earth', 'team', 'fight', 'lead', 'escape', 'send'], y: [118, 113, 111, 93, 93, 88, 85, 83, 82, 82], type: "bar", marker: {color: "#094923"} }
trace_BreakingTheFourthWall = { x: ['school', 'film', 'story', 'name', 'fall', 'plan', 'turn', 'lead', 'high', 'mother'], y: [46, 43, 38, 38, 37, 36, 35, 35, 34, 33], type: "bar", marker: {color: "#6e6375"} }


trace_Russia = { labels: ['ChekhovsGun', 'RealLife', 'BigBad', 'HeroicSacrifice', 'Foreshadowing'], values: [12, 9, 8, 8, 8], type: "pie", marker: {color: "#6664d5"} }
trace_SovietUnion = { labels: ['SceneryPorn', 'DeliberatelyMonochrome', 'RealLife', 'SceneryGorn', 'BreakingTheFourthWall'], values: [10, 9, 9, 8, 7], type: "pie", marker: {color: "#2be274"} }
trace_UnitedStates = { labels: ['BigBad', 'ShoutOut', 'OhCrap', 'ChekhovsGun', 'Foreshadowing'], values: [2082, 2033, 1484, 1350, 1258], type: "pie", marker: {color: "#285bcb"} }
trace_China = { labels: ['BigBad', 'ShoutOut', 'TheDragon', 'OhCrap', 'ChekhovsGun'], values: [89, 53, 39, 39, 39], type: "pie", marker: {color: "#5c8467"} }

trace_Musical = { x: ['BigDamnHeroes', 'BodyHorror', 'CassandraTruth'], y: [1263521126.0, 1263521126.0, 1263521126.0], type: "bar", marker: {color: "#040d95"} }
trace_Crime = { x: ['LaResistance', 'AdaptationExpansion', 'DeathBySex'], y: [209833364.5, 196389445.5, 194666936.5], type: "bar", marker: {color: "#04360f"} }
trace_Animation = { x: ['AnAesop', 'BeCarefulWhatYouWishFor', 'AllThereInTheManual'], y: [857611174.0, 857611174.0, 743559607.0], type: "bar", marker: {color: "#f59998"} }

var data_time = [trace_Musical_ShoutOut, trace_Musical_DeadpanSnarker, trace_Musical_RunningGag,
                    trace_Horror_BigBad, trace_Horror_ShoutOut, trace_Horror_AssholeVictim,
                    trace_Comedy_ShoutOut, trace_Comedy_RunningGag, trace_Comedy_BigBad,
                    trace_Documentary_StockFootage, trace_Documentary_TalkingHeads, trace_Documentary_TheKenBurnsEffect,
                    trace_Drama_BittersweetEnding, trace_Drama_Foreshadowing, trace_Drama_ShoutOut,
                    trace_News_AdamWesting, trace_News_AstroTurf, trace_News_GlobalWarming];

var gross = [trace_Musical, trace_Crime, trace_Animation]
var country = [trace_Russia, trace_SovietUnion, trace_UnitedStates, trace_China]
var keywords = [trace_BigBad, trace_HeroicSacrifice, trace_BreakingTheFourthWall]

var updatemenus=[
    {
        buttons: [
            {
              args: [{'visible': [true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]},
                       {'title': 'Musical'}],
              label: 'Musical',
              method: 'update'
            },
            {
              args: [{'visible': [false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false]},
                       {'title': '1'}],
              label: 'Horror',
              method: 'update'
            },
            {
              args: [{'visible': [false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false]},
                       {'title': '2'}],
              label: 'Comedy',
              method: 'update'
            },
            {
              args: [{'visible': [false, false, false, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false]},
                       {'title': '3'}],
              label: 'Documentary',
              method: 'update'
            },
            {
              args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false]},
                       {'title': '4'}],
              label: 'Drama',
              method: 'update'
            },
            {
              args: [{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true]},
                       {'title': '5'}],
              label: 'News',
              method: 'update'
            }
        ],
        direction: 'top',
        pad: {'r': 10, 't': 10},
        showactive: true,
        type: 'buttons',
        x: 1,
        xanchor: 'left',
        y: 1,
        yanchor: 'top',
        font: {fontSize: 8}
    }
]

var layout = {

  updatemenus: updatemenus,
  showlegend: false
};

Plotly.newPlot('container_2', data_time,  layout);

var updatemenus_2=[
    {
        buttons: [
            {
              args: [{'visible': [true, false, false]},
                       {'title': 'Musical'}],
              label: 'Musical',
              method: 'update'
            },
            {
              args: [{'visible': [false, true, false]},
                       {'title': 'Crime'}],
              label: 'Crime',
              method: 'update'
            },
            {
              args: [{'visible': [false, false, true]},
                       {'title': 'Animation'}],
              label: 'Animation',
              method: 'update'
            }
        ],
        direction: 'top',
        pad: {'r': 10, 't': 10},
        showactive: true,
        type: 'buttons',
        x: 1,
        xanchor: 'left',
        y: 1,
        yanchor: 'top',
        font: {fontSize: 8}
    }
]

var layout = {
  updatemenus: updatemenus_2,
  font:{
    family: 'Raleway, sans-serif'
  },
  showlegend: false,
  xaxis: {
    tickangle: -45
  },
  yaxis: {
    zeroline: false,
    gridwidth: 2
  },
  bargap :0.05
};

Plotly.newPlot('myDiv', gross, layout);

var updatemenus_3=[
    {
        buttons: [
            {
              args: [{'visible': [true, false, false, false]},
                       {'title': 'Russia'}],
              label: 'Russia',
              method: 'update'
            },
            {
              args: [{'visible': [false, true, false, false]},
                       {'title': 'Soviet Union'}],
              label: 'Soviet Union',
              method: 'update'
            },
            {
              args: [{'visible': [false, false, true, false]},
                       {'title': 'United States'}],
              label: 'United States',
              method: 'update'
            },
            {
              args: [{'visible': [false, false, false, true]},
                       {'title': 'China'}],
              label: 'China',
              method: 'update'
            }
        ],
        direction: 'top',
        pad: {'r': 10, 't': 10},
        showactive: true,
        type: 'buttons',
        x: 1,
        xanchor: 'left',
        y: 1,
        yanchor: 'top',
        font: {fontSize: 8}
    }
]

var layout = {
  updatemenus: updatemenus_3,
  font:{
    family: 'Raleway, sans-serif'
  },
  showlegend: false,
  xaxis: {
    tickangle: -45
  },
  yaxis: {
    zeroline: false,
    gridwidth: 2
  },
  bargap :0.05
};

Plotly.newPlot('container_4', country, layout);

var updatemenus_4=[
    {
        buttons: [
            {
              args: [{'visible': [true, false, false]},
                       {'title': 'BigBad'}],
              label: 'BigBad',
              method: 'update'
            },
            {
              args: [{'visible': [false, true, false]},
                       {'title': 'HeroicSacrifice'}],
              label: 'HeroicSacrifice',
              method: 'update'
            },
            {
              args: [{'visible': [false, false, true]},
                       {'title': 'BreakingTheFourthWall'}],
              label: 'BreakingTheFourthWall',
              method: 'update'
            }
        ],
        direction: 'top',
        pad: {'r': 10, 't': 10},
        showactive: true,
        type: 'buttons',
        x: 1,
        xanchor: 'left',
        y: 1,
        yanchor: 'top',
        font: {fontSize: 8}
    }
]

var layout = {
  updatemenus: updatemenus_4,
  font:{
    family: 'Raleway, sans-serif'
  },
  showlegend: false,
  xaxis: {
    tickangle: -45
  },
  yaxis: {
    zeroline: false,
    gridwidth: 2
  },
  bargap :0.05
};

Plotly.newPlot('container_5', keywords, layout);
