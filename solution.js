    const axios = require('axios');
    const cheerio = require('cheerio');

    const url = 'https://www.bankmega.com/promolainnya.php?subcat=1';
    const url2 = 'https://www.bankmega.com/promolainnya.php?subcat=2';
    const url3 = 'https://www.bankmega.com/promolainnya.php?subcat=3';
    const url6 = 'https://www.bankmega.com/promolainnya.php?subcat=6';

    

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
        
        console.log('{\n"Travel & Entertainment":\n',isi_promo,'\n}');
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

        console.log('{\n"Lifestyle & Wellness": \n',isi_promo,'\n}');
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

        console.log('{\n"F&B": \n',isi_promo,'\n}');
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

        console.log('{\n"Other Info": \n',isi_promo,'\n}');
      })
      .catch(console.error);