    const axios = require('axios');
    const cheerio = require('cheerio');

    //subcat=1 untuk kategori, page=1 untuk halaman pertama ganti angka 1 dengan lain untuk melihat halaman lainnya.
    
    const url = 'https://www.bankmega.com/promolainnya.php?subcat=1&page=1';
    const url2 = 'https://www.bankmega.com/promolainnya.php?subcat=2&page=1';
    const url3 = 'https://www.bankmega.com/promolainnya.php?subcat=3&page=1';
    const url6 = 'https://www.bankmega.com/promolainnya.php?subcat=6&page=1';

    

    axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('.clearfix li');
        const isi_promo = [];

        statsTable.each(function () {
            const Title = $(this).find('img').prop('title');
            const link_promo = $(this).find('a').prop('href');
            const url_gambar = $(this).find('img').prop('src');
            

          isi_promo.push({
            Title,
            link_promo : "https://www.bankmega.com/"+link_promo,
            url_gambar: "https://www.bankmega.com/"+url_gambar,
          });
        });
        var obj = {"Travel & Entertainment":isi_promo}
        console.log(JSON.stringify(obj, null, ' '));
      })
      .catch(console.error);
     

      

      axios(url2)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('.clearfix li');
        const isi_promo = [];

        statsTable.each(function () {
            const Title = $(this).find('img').prop('title');
            const link_promo = $(this).find('a').prop('href');
            const url_gambar = $(this).find('img').prop('src');

          isi_promo.push({
            Title,
            link_promo : "https://www.bankmega.com/"+link_promo,
            url_gambar: "https://www.bankmega.com/"+url_gambar,
          });
        });
        var obj = {"Lifestyle & Wellness":isi_promo}
        console.log(JSON.stringify(obj, null, ' '));
       // console.log('{\n: \n',isi_promo,'\n}');
      })
      .catch(console.error);

     

      axios(url3)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('.clearfix li');
        const isi_promo = [];

        statsTable.each(function () {
            const Title = $(this).find('img').prop('title');
            const link_promo = $(this).find('a').prop('href');
            const url_gambar = $(this).find('img').prop('src');

          isi_promo.push({
            Title,
            link_promo : "https://www.bankmega.com/"+link_promo,
            url_gambar: "https://www.bankmega.com/"+url_gambar,
          });
        });
        var obj = {"F&B":isi_promo}
        console.log(JSON.stringify(obj, null, ' '));
       // console.log('{\n"F&B": \n',isi_promo,'\n}');
      })
      .catch(console.error);

    

      axios(url6)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('.clearfix li');
        const isi_promo = [];

        statsTable.each(function () {
            const Title = $(this).find('img').prop('title');
            const link_promo = $(this).find('a').prop('href');
            const url_gambar = $(this).find('img').prop('src');

          isi_promo.push({
            Title,
            link_promo : "https://www.bankmega.com/"+link_promo,
            url_gambar: "https://www.bankmega.com/"+url_gambar,
          });
        });
        var obj = {"Other Info":isi_promo}
        console.log(JSON.stringify(obj, null, ' '));
       // console.log('{\n"Other Info": \n',isi_promo,'\n}');
      })
      .catch(console.error);