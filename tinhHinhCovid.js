const api_url1 = "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST";

const api_url2 = "https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST";

const table1 = document.getElementById('table1')

function hienThi1(){
    var tableHTML1 = '<tr><th>Thành phố</th><th>Ca ngày hôm nay</th><th>Ca đang điều trị</th><th>Ca tử vong</th><th>Ca đã khỏi</th><th>Tổng số ca</th></tr>'
    fetch(api_url1)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (i = 0; i < (data.detail.length); i++){
                tableHTML1 += 
                "<tr><td>" + data.detail[i].name + "</td>\n" +
                "<td>" + data.detail[i].casesToday + "</td>\n"+
                "<td>" + data.detail[i].treating + "</td>\n"+
                "<td>" + data.detail[i].death + "</td>\n"+ 
                "<td>"  + data.detail[i].recovered + "</td>\n"+
                "<td>" + data.detail[i].cases + "</td>\n</tr>"
            }
            table1.innerHTML = tableHTML1;
        });    
}

function hienThi2(){
    var tableHTML2 = '<tr><th>Thành phố</th><th>Ca ngày hôm nay</th></tr>'
    fetch(api_url2)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (i = 0; i < (data.key.length); i++){
                tableHTML2 += 
                "<tr><td>" + data.key[i].name + "</td>\n" +
                "<td>" + data.key[i]["hec-key"] + "</td>\n</tr>"
            }
            table2.innerHTML = tableHTML2;
        });
}
