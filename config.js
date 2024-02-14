var config = {
    style: 'mapbox://styles/cnakalembe/clsksz43703tj01qq841m1keo',
    accessToken: 'pk.eyJ1IjoiY25ha2FsZW1iZSIsImEiOiJja21nMTZoZGkwdG9hMndwanpsNHE4dmtqIn0.mu2xyJZOi_oWbZarPZKpsQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Helmets Labeling Crops',
    subtitle: 'This is the story of Helmets Labeling Crops-Towards Scalable Crop-type mapping with EO and ML for Decision-making
',
    byline: 'By Catherine Nakalembe',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left', //options are left, right, center, full
            hidden: false,
            title: 'Display Title',
            image: 'images/source.png',
            description: 'Create, expand, and maintain equitably labeled datasets that support ML tools of high social value in low and mid-income contexts 
5 Focus countries: Kenya, Mali, Rwanda, Tanzania, Uganda, Nigeria, Paraguay, Zambia
',
            //text for description is html- can rely on that for extra formatting
            location: {
                center: [36.14102, -0.70968],
                zoom: 8.5,
                pitch: 60,
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
            id: 'project-partners',
            alignment: 'right',
            hidden: false,
            title: 'Project Partners- University of Maryland',
            image: 'https://umd-brand.transforms.svdcdn.com/production/uploads/images/logos-formal-seal.jpg?w=1801&h=1801&auto=compress%2Cformat&fit=crop&dm=1651267392&s=81a14f930f7888983f0f8bc10146c0b2',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
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
                center: [-58.54195, -34.71600],
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
