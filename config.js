var config = {
    style: 'mapbox://styles/cnakalembe/clsm2buv903v001qs2yms5elp',
    accessToken: 'pk.eyJ1IjoiY25ha2FsZW1iZSIsImEiOiJjajN2enloODcwMDFjMzFsM2E1M3ZiOGN2In0.EggUNcpCmeGwwTMlZgj_hg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Bididi Refugee Settlement Est. 2017',
    subtitle: 'Bidibidi Refugee Settlement is located in Yumbe District in the North Western region of Uganda',
    byline: 'Dr. Catherine Nakelembe',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left', //options are left, right, center, full
            hidden: false,
            title: 'Water Point Zone 2',
            image: 'images/IMG_6573.JPG',
            description: 'Uganda is home to over 1.3 million refugees and asylum seekers due to conflicts in her neighbouring countries especially Southern Sudan and The Democratic Republic of Congo. The unrest in Southern Sudan since late 2013 has led to a large influx of refugees into Northern-western Uganda as a result forested land was cleared in Yumbe district in early 2016  to host the refugees and Bidibidi Refugee Settlement was established. Photo Credit: Catherine Nakalembe, 4th of November 2016 in Zone 2, Yumbe, Northern Region, Uganda',
            //text for description is html- can rely on that for extra formatting
            location: {
                center: [31.3617056, 3.5257944],
                zoom: 12.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '', //add additional js function for this key
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [31.33751, 3.53595],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'full',
            hidden: false,
            title: 'Third Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [31.34975, 3.37040],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};