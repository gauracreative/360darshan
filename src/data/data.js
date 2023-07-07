import _ from 'lodash'

const data = {
    "ambikaKalna": {
        "label": "Sri Ambika Kalna",
        "places": [
            {
                "audio": [
                    {
                        "file": "devadideva",
                        "label": "Deva Adi Deva"
                    }
                ],
                "book": "navadvip_dham.pdf#page=229",
                "label": "Sri Suryadas Sarakhela Residence",
                "scenes": [
                    {
                        "file": "sarakh_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -7,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -2,
                                "target_yaw": 34,
                                "yaw": 34
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 2,
                        "scene": "1",
                        "status": 1,
                        "yaw": 30
                    },
                    {
                        "file": "sarakh_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": 5,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 120,
                                "target_pitch": -3,
                                "target_yaw": -27,
                                "yaw": -150
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -2,
                        "scene": "2",
                        "status": 1,
                        "yaw": 34
                    },
                    {
                        "file": "sarakh_03",
                        "hfov": 120,
                        "hotspots": [
                            {
                                "pitch": -6,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 2,
                                "target_yaw": 30,
                                "yaw": 91
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -3,
                        "scene": "3",
                        "status": 1,
                        "yaw": -27
                    }
                ],
                "slug": "suryadas-sarakhela-residence",
                "time": "Mar 30, 2008"
            },
            {
                "audio": [
                    {
                        "file": "devadideva",
                        "label": "Deva Adi Deva"
                    }
                ],
                "book": "navadvip_dham.pdf#page=228",
                "label": "Sri Gauridas Pandit Residence",
                "scenes": [
                    {
                        "file": "gaurid_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -25,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 7,
                                "yaw": 102
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "1",
                        "status": 1,
                        "yaw": 3
                    },
                    {
                        "file": "gaurid_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -34,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 3,
                                "target_yaw": 3,
                                "yaw": 2
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "2",
                        "status": 1,
                        "yaw": 7
                    }
                ],
                "slug": "gauridas-pandit-residence",
                "time": "Mar 30, 2008"
            }
        ],
        "slug": "ambika-kalna"
    },
    "ekachakra": {
        "label": "Sri Ekachakra",
        "places": [
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    },
                    {
                        "file": "devadideva",
                        "label": "Deva Adi Deva"
                    }
                ],
                "book": "navadvip_dham.pdf#page=249",
                "label": "Sri Garbhavas",
                "scenes": [
                    {
                        "file": "garbhavas_01",
                        "hfov": 110,
                        "hotspots": [
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "1",
                        "status": 1,
                        "yaw": 31
                    }
                ],
                "slug": "garbhavas",
                "time": "Apr 1, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    }
                ],
                "book": "navadvip_dham.pdf#page=249",
                "label": "Sri Siddha Bakul",
                "scenes": [
                    {
                        "file": "sbakul_01",
                        "hfov": 110,
                        "hotspots": [
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 2,
                        "scene": "1",
                        "status": 1,
                        "yaw": 17
                    }
                ],
                "slug": "siddha-bakul",
                "time": "Apr 1, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    }
                ],
                "book": "navadvip_dham.pdf#page=249",
                "label": "Sri Jana Kunda",
                "scenes": [
                    {
                        "file": "janakund_01",
                        "hfov": 110,
                        "hotspots": [
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -6,
                        "scene": "1",
                        "status": 1,
                        "yaw": 38
                    }
                ],
                "slug": "jana-kunda",
                "time": "Apr 1, 2008"
            }
        ],
        "slug": "ekachakra"
    },
    "govardhan": {
        "label": "Sri Govardhan",
        "places": [
            {
                "audio": [
                    {
                        "file": "radhak02",
                        "label": "Radha Kunda Bhajan 2"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    }
                ],
                "book": "vraj_mandal.pdf#page=199",
                "label": "Sri Bhaktivinoda Thakura at Radha Kunda",
                "scenes": [
                    {
                        "file": "bhtradh_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -8,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -10,
                                "target_yaw": 49,
                                "yaw": -163
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -6,
                        "scene": "1",
                        "status": 1,
                        "yaw": 80
                    },
                    {
                        "file": "bhtradh_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -7,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -6,
                                "target_yaw": 80,
                                "yaw": 85
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -10,
                        "scene": "2",
                        "status": 1,
                        "yaw": 49
                    }
                ],
                "slug": "bhaktivinoda-radha-kunda",
                "time": "Apr 4, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    }
                ],
                "book": "vraj_mandal.pdf#page=256",
                "label": "Sri Govinda Kunda",
                "scenes": [
                    {
                        "file": "govindk_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -6,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 2,
                                "target_yaw": 292,
                                "yaw": 40
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 5,
                        "scene": "1",
                        "status": 1,
                        "yaw": -70
                    },
                    {
                        "file": "govindk_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -8,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -15,
                                "target_yaw": 18,
                                "yaw": 29
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 2,
                        "scene": "2",
                        "status": 1,
                        "yaw": 292
                    },
                    {
                        "file": "govindk_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -11,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 5,
                                "target_yaw": -70,
                                "yaw": 1
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -15,
                        "scene": "3",
                        "status": 1,
                        "yaw": 18
                    }
                ],
                "slug": "govinda-kunda",
                "time": "Nov 3, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=266",
                "label": "Sri Uddhava Kunda",
                "scenes": [
                    {
                        "file": "udhavk_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -30,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 2,
                                "target_yaw": -26,
                                "yaw": -45
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "1",
                        "status": 1,
                        "yaw": -30
                    },
                    {
                        "file": "udhavk_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": 2,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 3,
                                "target_yaw": -30,
                                "yaw": 71
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 2,
                        "scene": "2",
                        "status": 1,
                        "yaw": -26
                    }
                ],
                "slug": "uddhava-kunda",
                "time": "Apr 4, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=220",
                "label": "Sri Kusum Sarovara",
                "scenes": [
                    {
                        "file": "kusumsar_01",
                        "hfov": 110,
                        "hotspots": [
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -9,
                        "scene": "1",
                        "status": 1,
                        "yaw": 18
                    }
                ],
                "slug": "kusum-sarovara",
                "time": "Apr 4, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=229",
                "label": "Sri Kilola Kunda",
                "scenes": [
                    {
                        "file": "kilokund_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -20,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -9,
                                "target_yaw": 136,
                                "yaw": 38
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -5,
                        "scene": "1",
                        "status": 1,
                        "yaw": 116
                    },
                    {
                        "file": "kilokund_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": 0,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -2,
                                "target_yaw": 25,
                                "yaw": -88
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -9,
                        "scene": "2",
                        "status": 1,
                        "yaw": 136
                    },
                    {
                        "file": "kilokund_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -20,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -5,
                                "target_yaw": 116,
                                "yaw": 179
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -2,
                        "scene": "3",
                        "status": 1,
                        "yaw": 25
                    }
                ],
                "slug": "kilola-kunda",
                "time": "Nov 10, 2008"
            },
            {
                "audio": [
                    {
                        "file": "damodarastaka",
                        "label": "Damodara Astaka"
                    }
                ],
                "book": "vraj_mandal.pdf#page=217",
                "label": "Sri Giridhari Gaudiya Matha",
                "scenes": [
                    {
                        "file": "giridh_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -6,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 3,
                                "target_yaw": -25,
                                "yaw": 39
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -3,
                        "scene": "1",
                        "status": 1,
                        "yaw": 44
                    },
                    {
                        "file": "giridh_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -5,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -8,
                                "target_yaw": 33,
                                "yaw": 17
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "2",
                        "status": 1,
                        "yaw": -25
                    },
                    {
                        "file": "giridh_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -4,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": 12,
                                "target_yaw": 102,
                                "yaw": 11
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -8,
                        "scene": "3",
                        "status": 1,
                        "yaw": 33
                    },
                    {
                        "file": "giridh_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -8,
                                "status": 1,
                                "target": "5",
                                "target_hfov": 110,
                                "target_pitch": -6,
                                "target_yaw": -35,
                                "yaw": 109
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 12,
                        "scene": "4",
                        "status": 1,
                        "yaw": 102
                    },
                    {
                        "file": "giridh_05",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -8,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 0,
                                "yaw": -59
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -6,
                        "scene": "5",
                        "status": 1,
                        "yaw": -35
                    }
                ],
                "slug": "giridhari-gaudiya-matha",
                "time": "Apr 4, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=233",
                "label": "Sri Haridev Mandir",
                "scenes": [
                    {
                        "file": "haridev_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": 6,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 3,
                                "target_yaw": 61,
                                "yaw": 65
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 12,
                        "scene": "1",
                        "status": 1,
                        "yaw": 69
                    },
                    {
                        "file": "haridev_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -11,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -7,
                                "target_yaw": 32,
                                "yaw": 62
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "2",
                        "status": 1,
                        "yaw": 61
                    },
                    {
                        "file": "haridev_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -27,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 12,
                                "target_yaw": 69,
                                "yaw": -149
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -7,
                        "scene": "3",
                        "status": 1,
                        "yaw": 32
                    }
                ],
                "slug": "haridev-mandir",
                "time": "Apr 3, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=238",
                "label": "Sri Sanatan Goswami Bhajan Kutir",
                "scenes": [
                    {
                        "file": "sanbkgov_01",
                        "hfov": 110,
                        "hotspots": [
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "1",
                        "status": 1,
                        "yaw": 0
                    }
                ],
                "slug": "sanatan-goswami-bhajan-kutir",
                "time": "Apr 3, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=240",
                "label": "Sri Mukharavinda Temple",
                "scenes": [
                    {
                        "file": "mukhar_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": -21,
                                "yaw": 95
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "1",
                        "status": 1,
                        "yaw": 346
                    },
                    {
                        "file": "mukhar_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -10,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": -30,
                                "yaw": 48
                            },
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": -17,
                                "target_yaw": 21,
                                "yaw": -43
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -1,
                        "scene": "2",
                        "status": 1,
                        "yaw": -21
                    },
                    {
                        "file": "mukhar_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -18,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": -17,
                                "target_yaw": 21,
                                "yaw": 140
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -1,
                        "scene": "3",
                        "status": 1,
                        "yaw": -30
                    },
                    {
                        "file": "mukhar_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -22,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 346,
                                "yaw": 123
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -17,
                        "scene": "4",
                        "status": 1,
                        "yaw": 21
                    }
                ],
                "slug": "mukharavind",
                "time": "Apr 3, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=230",
                "label": "Sri Manasi Ganga",
                "scenes": [
                    {
                        "file": "manasig_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -4,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 2,
                                "target_yaw": 52,
                                "yaw": -42
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "1",
                        "status": 1,
                        "yaw": 4
                    },
                    {
                        "file": "manasig_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -10,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": 4,
                                "yaw": 93
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 2,
                        "scene": "2",
                        "status": 1,
                        "yaw": 52
                    }
                ],
                "slug": "manasi-ganga",
                "time": "Apr 3, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=217",
                "label": "Sri The Annakut Temple",
                "scenes": [
                    {
                        "file": "ankut_01",
                        "hfov": 120,
                        "hotspots": [
                            {
                                "pitch": -11,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": 13,
                                "yaw": 117
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "1",
                        "status": 1,
                        "yaw": 24
                    },
                    {
                        "file": "ankut_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 8,
                                "target_yaw": 41,
                                "yaw": 101
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -1,
                        "scene": "2",
                        "status": 1,
                        "yaw": 13
                    },
                    {
                        "file": "ankut_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -9,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": 3,
                                "target_yaw": 30,
                                "yaw": 95
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 8,
                        "scene": "3",
                        "status": 1,
                        "yaw": 41
                    },
                    {
                        "file": "ankut_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -15,
                                "status": 1,
                                "target": "5",
                                "target_hfov": 110,
                                "target_pitch": 4,
                                "target_yaw": 73,
                                "yaw": 90
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "4",
                        "status": 1,
                        "yaw": 30
                    },
                    {
                        "file": "ankut_05",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -9,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 120,
                                "target_pitch": 1,
                                "target_yaw": 24,
                                "yaw": -75
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 4,
                        "scene": "5",
                        "status": 1,
                        "yaw": 73
                    }
                ],
                "slug": "annakut-temple",
                "time": "Apr 4, 2008"
            },
            {
                "audio": [
                    {
                        "file": "radhak01",
                        "label": "Radha Kunda Bhajan 1"
                    }
                ],
                "book": "vraj_mandal.pdf#page=179",
                "label": "Sri Raghunatha das Goswami Samadhi",
                "scenes": [
                    {
                        "file": "ragsam_01",
                        "hfov": 110,
                        "hotspots": [
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "1",
                        "status": 1,
                        "yaw": 5
                    }
                ],
                "slug": "raghunatha-das-goswami-samadhi",
                "time": "Apr 4, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=160",
                "label": "Sri Shyama Kunda",
                "scenes": [
                    {
                        "file": "syamk_01",
                        "hfov": 120,
                        "hotspots": [
                            {
                                "pitch": -7,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -3,
                                "target_yaw": 14,
                                "yaw": 94
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -3,
                        "scene": "1",
                        "status": 1,
                        "yaw": 57
                    },
                    {
                        "file": "syamk_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -8,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": 115,
                                "yaw": 147
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -3,
                        "scene": "2",
                        "status": 1,
                        "yaw": -14
                    },
                    {
                        "file": "syamk_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": 0,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": 30,
                                "yaw": -69
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "3",
                        "status": 1,
                        "yaw": 115
                    },
                    {
                        "file": "syamk_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -5,
                                "status": 1,
                                "target": "5",
                                "target_hfov": 110,
                                "target_pitch": 18,
                                "target_yaw": 274,
                                "yaw": 127
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "4",
                        "status": 1,
                        "yaw": 30
                    },
                    {
                        "file": "syamk_05",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -11,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 120,
                                "target_pitch": -3,
                                "target_yaw": 57,
                                "yaw": 96
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 18,
                        "scene": "5",
                        "status": 1,
                        "yaw": 274
                    }
                ],
                "slug": "shyama-kunda",
                "time": "Apr 4, 2008"
            },
            {
                "audio": [
                    {
                        "file": "radhak02",
                        "label": "Radha Kunda Bhajan 2"
                    },
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "damodarastaka",
                        "label": "Damodara Astaka"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=160",
                "label": "Sri Radha Kunda",
                "scenes": [
                    {
                        "file": "radhak_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -7,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -2,
                                "target_yaw": 130,
                                "yaw": -63
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -4,
                        "scene": "1",
                        "status": 1,
                        "yaw": -38
                    },
                    {
                        "file": "radhak_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -19,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 120,
                                "target_pitch": 10,
                                "target_yaw": -17,
                                "yaw": -176
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -2,
                        "scene": "2",
                        "status": 1,
                        "yaw": 130
                    },
                    {
                        "file": "radhak_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -1,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 120,
                                "target_pitch": -4,
                                "target_yaw": -38,
                                "yaw": -65
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 10,
                        "scene": "3",
                        "status": 1,
                        "yaw": -17
                    }
                ],
                "slug": "radha-kunda",
                "time": "Apr 4, 2008"
            }
        ],
        "slug": "govardhan"
    },
    "kattwa": {
        "label": "Sri Kattwa",
        "places": [
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    },
                    {
                        "file": "yopit01",
                        "label": "Yoga Pitha Surround"
                    }
                ],
                "book": "navadvip_dham.pdf#page=263",
                "label": "Sri Madhai Samadhi",
                "scenes": [
                    {
                        "file": "madhai_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -40,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -10,
                                "target_yaw": 35,
                                "yaw": -130
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "1",
                        "status": 1,
                        "yaw": 49
                    },
                    {
                        "file": "madhai_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -29,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": -48,
                                "yaw": -25
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -10,
                        "scene": "2",
                        "status": 1,
                        "yaw": 35
                    },
                    {
                        "file": "madhai_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -33,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 3,
                                "target_yaw": 49,
                                "yaw": 84
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "3",
                        "status": 1,
                        "yaw": -48
                    }
                ],
                "slug": "madhai-samadhi",
                "time": "Mar 29, 2008"
            },
            {
                "audio": [
                    {
                        "file": "devadideva",
                        "label": "Deva Adi Deva"
                    }
                ],
                "book": "navadvip_dham.pdf#page=263",
                "label": "Sri Mahaprabhu Hair",
                "scenes": [
                    {
                        "file": "sanyas_01",
                        "hfov": 110,
                        "hotspots": [
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "1",
                        "status": 1,
                        "yaw": 30
                    }
                ],
                "slug": "mahaprabhu-hair",
                "time": "Mar 29, 2008"
            }
        ],
        "slug": "kattwa"
    },
    "navadvipa": {
        "label": "Sri Navadvipa",
        "places": [
            {
                "audio": [
                    {
                        "file": "gitagovs",
                        "label": "Gita Govinda"
                    },
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    },
                    {
                        "file": "yopit01",
                        "label": "Yoga Pitha Surround"
                    }
                ],
                "book": "navadvip_dham.pdf#page=181",
                "label": "Sri Samudragarh",
                "scenes": [
                    {
                        "file": "samudr_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -11,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 8,
                                "target_yaw": -18,
                                "yaw": -46
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "1",
                        "status": 1,
                        "yaw": -11
                    },
                    {
                        "file": "samudr_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -3,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": -4,
                                "yaw": -64
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 8,
                        "scene": "2",
                        "status": 1,
                        "yaw": -18
                    }
                ],
                "slug": "samudragarh",
                "time": "Mar 26, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    },
                    {
                        "file": "yopit01",
                        "label": "Yoga Pitha Surround"
                    }
                ],
                "book": "navadvip_dham.pdf#page=133",
                "label": "Sri Hari Hara Kshetra",
                "scenes": [
                    {
                        "file": "harihara_01",
                        "hfov": 100,
                        "hotspots": [
                            {
                                "pitch": -9,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -5,
                                "target_yaw": -39,
                                "yaw": -147
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "1",
                        "status": 1,
                        "yaw": 62
                    },
                    {
                        "file": "harihara_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -2,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 100,
                                "target_pitch": 0,
                                "target_yaw": 62,
                                "yaw": 218
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -5,
                        "scene": "2",
                        "status": 1,
                        "yaw": -39
                    }
                ],
                "slug": "hari-hara",
                "time": "Mar 25, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    },
                    {
                        "file": "yopit01",
                        "label": "Yoga Pitha Surround"
                    }
                ],
                "book": "navadvip_dham.pdf#page=190",
                "label": "Sri Vidyanagar",
                "scenes": [
                    {
                        "file": "vidyan_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -7,
                                "target_yaw": 40,
                                "yaw": 53
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 8,
                        "scene": "1",
                        "status": 1,
                        "yaw": 19
                    },
                    {
                        "file": "vidyan_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -18,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 8,
                                "target_yaw": 19,
                                "yaw": -152
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -7,
                        "scene": "2",
                        "status": 1,
                        "yaw": 40
                    }
                ],
                "slug": "vidyanagar",
                "time": "Mar 26, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    },
                    {
                        "file": "devadideva",
                        "label": "Deva Adi Deva"
                    }
                ],
                "book": "navadvip_dham.pdf#page=59",
                "label": "Sri Srivasa-angan",
                "scenes": [
                    {
                        "file": "srivasang_01",
                        "hfov": 120,
                        "hotspots": [
                            {
                                "pitch": -6,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -11,
                                "target_yaw": 3,
                                "yaw": 57
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 7,
                        "scene": "1",
                        "status": 1,
                        "yaw": 24
                    },
                    {
                        "file": "srivasang_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -21,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 120,
                                "target_pitch": 11,
                                "target_yaw": 30,
                                "yaw": 126
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -11,
                        "scene": "2",
                        "status": 1,
                        "yaw": 3
                    },
                    {
                        "file": "srivasang_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -27,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 120,
                                "target_pitch": 7,
                                "target_yaw": 24,
                                "yaw": -111
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 11,
                        "scene": "3",
                        "status": 1,
                        "yaw": 30
                    }
                ],
                "slug": "srivasa-angan",
                "time": "Mar 27, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    },
                    {
                        "file": "yopit01",
                        "label": "Yoga Pitha Surround"
                    }
                ],
                "book": "navadvip_dham.pdf#page=126",
                "label": "Sri Svananda Sukhada Kunja",
                "scenes": [
                    {
                        "file": "bhtkunj_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -7,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 80,
                                "target_pitch": -7,
                                "target_yaw": 40,
                                "yaw": 104
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -3,
                        "scene": "1",
                        "status": 1,
                        "yaw": -18
                    },
                    {
                        "file": "bhtkunj_02",
                        "hfov": 80,
                        "hotspots": [
                            {
                                "pitch": -7,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 80,
                                "target_pitch": -2,
                                "target_yaw": 32,
                                "yaw": 177
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -7,
                        "scene": "2",
                        "status": 1,
                        "yaw": 40
                    },
                    {
                        "file": "bhtkunj_03",
                        "hfov": 80,
                        "hotspots": [
                            {
                                "pitch": -4,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": 53,
                                "yaw": -72
                            },
                            {
                                "pitch": -6,
                                "status": 1,
                                "target": "5",
                                "target_hfov": 110,
                                "target_pitch": -8,
                                "target_yaw": 66,
                                "yaw": -151
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -2,
                        "scene": "3",
                        "status": 1,
                        "yaw": 32
                    },
                    {
                        "file": "bhtkunj_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -3,
                                "status": 1,
                                "target": "5",
                                "target_hfov": 110,
                                "target_pitch": -8,
                                "target_yaw": 66,
                                "yaw": 130
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -8,
                        "scene": "4",
                        "status": 1,
                        "yaw": 66
                    },
                    {
                        "file": "bhtkunj_05",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -16,
                                "status": 1,
                                "target": "7",
                                "target_hfov": 110,
                                "target_pitch": -12,
                                "target_yaw": 38,
                                "yaw": 140
                            },
                            {
                                "pitch": -9,
                                "status": 1,
                                "target": "6",
                                "target_hfov": 110,
                                "target_pitch": -13,
                                "target_yaw": 27,
                                "yaw": -161
                            },
                            {
                                "pitch": -26,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -3,
                                "target_yaw": -18,
                                "yaw": 41
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -8,
                        "scene": "5",
                        "status": 1,
                        "yaw": 66
                    },
                    {
                        "file": "bhtkunj_06",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -14,
                                "status": 1,
                                "target": "5",
                                "target_hfov": 110,
                                "target_pitch": -15,
                                "target_yaw": 146,
                                "yaw": 82
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -13,
                        "scene": "6",
                        "status": 1,
                        "yaw": 27
                    },
                    {
                        "file": "bhtkunj_07",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -6,
                                "status": 1,
                                "target": "5",
                                "target_hfov": 110,
                                "target_pitch": -8,
                                "target_yaw": 66,
                                "yaw": -36
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -12,
                        "scene": "7",
                        "status": 1,
                        "yaw": 38
                    }
                ],
                "slug": "svananda-sukhada-kunja",
                "time": "Mar 25, 2008"
            },
            {
                "audio": [
                    {
                        "file": "devadideva",
                        "label": "Deva Adi Deva"
                    }
                ],
                "book": "navadvip_dham.pdf#page=62",
                "label": "Sri Advaita Bhavan and Gadadhar Angana",
                "scenes": [
                    {
                        "file": "gadadhang_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -19,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 9,
                                "target_yaw": 8,
                                "yaw": -175
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -4,
                        "scene": "1",
                        "status": 1,
                        "yaw": 31
                    },
                    {
                        "file": "gadadhang_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -19,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -7,
                                "target_yaw": 32,
                                "yaw": 46
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 9,
                        "scene": "2",
                        "status": 1,
                        "yaw": 8
                    },
                    {
                        "file": "gadadhang_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -22,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -4,
                                "target_yaw": 31,
                                "yaw": -120
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -7,
                        "scene": "3",
                        "status": 1,
                        "yaw": 32
                    }
                ],
                "slug": "advaita-bhavan-gadadhar-angana",
                "time": "Mar 27, 2008"
            },
            {
                "audio": [
                    {
                        "file": "devadideva",
                        "label": "Deva Adi Deva"
                    }
                ],
                "book": "navadvip_dham.pdf#page=180",
                "label": "Sri Puri Mandir",
                "scenes": [
                    {
                        "file": "purimandir_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -16,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 2,
                                "target_yaw": 17,
                                "yaw": 133
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 5,
                        "scene": "1",
                        "status": 1,
                        "yaw": -230
                    },
                    {
                        "file": "purimandir_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -36,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 5,
                                "target_yaw": -230,
                                "yaw": -149
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 2,
                        "scene": "2",
                        "status": 1,
                        "yaw": 17
                    }
                ],
                "slug": "puri-mandir",
                "time": "Mar 24, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    },
                    {
                        "file": "devadideva",
                        "label": "Deva Adi Deva"
                    },
                    {
                        "file": "yopit01",
                        "label": "Yoga Pitha Surround"
                    }
                ],
                "book": "navadvip_dham.pdf#page=75",
                "label": "Sri Gaurakisor das Babaji Samadhi",
                "scenes": [
                    {
                        "file": "gkisam_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -18,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 90,
                                "target_pitch": 1,
                                "target_yaw": -35,
                                "yaw": -10
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -1,
                        "scene": "1",
                        "status": 1,
                        "yaw": 0
                    },
                    {
                        "file": "gkisam_02",
                        "hfov": 90,
                        "hotspots": [
                            {
                                "pitch": -21,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": 0,
                                "yaw": 57
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "2",
                        "status": 1,
                        "yaw": -35
                    }
                ],
                "slug": "gaurakisor-babaji-samadhi",
                "time": "Mar 27, 2008"
            },
            {
                "audio": [
                    {
                        "file": "gitagovs",
                        "label": "Gita Govinda"
                    }
                ],
                "book": "navadvip_dham.pdf#page=182",
                "label": "Sri Gour Gadadhar Mandir",
                "scenes": [
                    {
                        "file": "champah_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -14,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 6,
                                "target_yaw": 25,
                                "yaw": 67
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 12,
                        "scene": "1",
                        "status": 1,
                        "yaw": 11
                    },
                    {
                        "file": "champah_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -13,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 32,
                                "yaw": 30
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 6,
                        "scene": "2",
                        "status": 1,
                        "yaw": 25
                    },
                    {
                        "file": "champah_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -28,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 12,
                                "target_yaw": 11,
                                "yaw": -150
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "3",
                        "status": 1,
                        "yaw": 32
                    }
                ],
                "slug": "gour-gadadhar",
                "time": "Mar 26, 2008"
            },
            {
                "audio": [
                    {
                        "file": "devadideva",
                        "label": "Deva Adi Deva"
                    }
                ],
                "book": "navadvip_dham.pdf#page=46",
                "label": "Sri Vishnupriya Devi Janma Sthali",
                "scenes": [
                    {
                        "file": "vpriya_01",
                        "hfov": 110,
                        "hotspots": [
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "1",
                        "status": 1,
                        "yaw": -27
                    }
                ],
                "slug": "vishnupriya-janma-sthali",
                "time": "Mar 24, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    },
                    {
                        "file": "devadideva",
                        "label": "Deva Adi Deva"
                    }
                ],
                "book": "navadvip_dham.pdf#page=115",
                "label": "Sri Chand Kazi Samadhi",
                "scenes": [
                    {
                        "file": "ckazi_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -16,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 11,
                                "target_yaw": -24,
                                "yaw": 44
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 12,
                        "scene": "1",
                        "status": 1,
                        "yaw": 37
                    },
                    {
                        "file": "ckazi_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -25,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 12,
                                "target_yaw": 37,
                                "yaw": -158
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 11,
                        "scene": "2",
                        "status": 1,
                        "yaw": -24
                    }
                ],
                "slug": "chand-kazi-samadhi",
                "time": "Mar 27, 2008"
            },
            {
                "audio": [
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    }
                ],
                "book": "navadvip_dham.pdf#page=171",
                "label": "Sri Devananda Gaudiya Matha",
                "scenes": [
                    {
                        "file": "devand_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -11,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -10,
                                "target_yaw": 303,
                                "yaw": 100
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "1",
                        "status": 1,
                        "yaw": 33
                    },
                    {
                        "file": "devand_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 6,
                                "target_yaw": 38,
                                "yaw": -144
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -10,
                        "scene": "2",
                        "status": 1,
                        "yaw": 303
                    },
                    {
                        "file": "devand_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -11,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": -5,
                                "target_yaw": -1,
                                "yaw": 98
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 6,
                        "scene": "3",
                        "status": 1,
                        "yaw": 38
                    },
                    {
                        "file": "devand_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -17,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 3,
                                "target_yaw": 33,
                                "yaw": 128
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -5,
                        "scene": "4",
                        "status": 1,
                        "yaw": -1
                    }
                ],
                "slug": "devananda-gaudiya-matha",
                "time": "Mar 24, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    }
                ],
                "book": "navadvip_dham.pdf#page=136",
                "label": "Sri Nrsimha Pali (Devapali)",
                "scenes": [
                    {
                        "file": "npali_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -8,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 0,
                                "yaw": 16
                            },
                            {
                                "pitch": -18,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -6,
                                "target_yaw": 87,
                                "yaw": -137
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "1",
                        "status": 1,
                        "yaw": 0
                    },
                    {
                        "file": "npali_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -9,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 0,
                                "yaw": -51
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -6,
                        "scene": "2",
                        "status": 1,
                        "yaw": 87
                    },
                    {
                        "file": "npali_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -22,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 0,
                                "yaw": -179
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "3",
                        "status": 1,
                        "yaw": 0
                    }
                ],
                "slug": "nrsimha-pali",
                "time": "Mar 25, 2008"
            },
            {
                "audio": [
                    {
                        "file": "sm_kirtan",
                        "label": "Swami Maharaja Kirtan"
                    }
                ],
                "book": "navadvip_dham.pdf#page=91",
                "label": "Sri Mayapur Chandrodaya Mandir",
                "scenes": [
                    {
                        "file": "iskconmpur_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": 0,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 6,
                                "target_yaw": 13,
                                "yaw": 116
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -9,
                        "scene": "1",
                        "status": 1,
                        "yaw": 78
                    },
                    {
                        "file": "iskconmpur_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -6,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": -6,
                                "yaw": -5
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 6,
                        "scene": "2",
                        "status": 1,
                        "yaw": 13
                    },
                    {
                        "file": "iskconmpur_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -3,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -9,
                                "target_yaw": 78,
                                "yaw": 143
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -1,
                        "scene": "3",
                        "status": 1,
                        "yaw": -6
                    }
                ],
                "slug": "chandrodaya-mandir",
                "time": "Mar 27, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ndvip01",
                        "label": "Navadvipa Surround"
                    }
                ],
                "book": "navadvip_dham.pdf#page=123",
                "label": "Sri Surabhi Kunja",
                "scenes": [
                    {
                        "file": "surabhk_01",
                        "hfov": 120,
                        "hotspots": [
                            {
                                "pitch": -13,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -12,
                                "target_yaw": 3,
                                "yaw": 18
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "1",
                        "status": 1,
                        "yaw": 4
                    },
                    {
                        "file": "surabhk_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -8,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -7,
                                "target_yaw": 63,
                                "yaw": 74
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -12,
                        "scene": "2",
                        "status": 1,
                        "yaw": 3
                    },
                    {
                        "file": "surabhk_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": -19,
                                "target_yaw": 4,
                                "yaw": 112
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -7,
                        "scene": "3",
                        "status": 1,
                        "yaw": 63
                    },
                    {
                        "file": "surabhk_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -14,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 120,
                                "target_pitch": 0,
                                "target_yaw": 4,
                                "yaw": -169
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -19,
                        "scene": "4",
                        "status": 1,
                        "yaw": 4
                    }
                ],
                "slug": "surabhi-kunja",
                "time": "Mar 24, 2008"
            },
            {
                "audio": [
                    {
                        "file": "yopit01",
                        "label": "Yoga Pitha Surround"
                    }
                ],
                "book": "navadvip_dham.pdf#page=48",
                "label": "Sri Yoga Pitha",
                "scenes": [
                    {
                        "file": "yopit_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -9,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 5,
                                "target_yaw": 68,
                                "yaw": 23
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "1",
                        "status": 1,
                        "yaw": 21
                    },
                    {
                        "file": "yopit_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -10,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 16,
                                "target_yaw": -6,
                                "yaw": 92
                            },
                            {
                                "pitch": -4,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": 20,
                                "yaw": 87
                            },
                            {
                                "pitch": -7,
                                "status": 1,
                                "target": "5",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 40,
                                "yaw": 75
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 5,
                        "scene": "2",
                        "status": 1,
                        "yaw": 68
                    },
                    {
                        "file": "yopit_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -15,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 5,
                                "target_yaw": 68,
                                "yaw": 107
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 16,
                        "scene": "3",
                        "status": 1,
                        "yaw": -6
                    },
                    {
                        "file": "yopit_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -25,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 5,
                                "target_yaw": 68,
                                "yaw": 101
                            },
                            {
                                "pitch": -5,
                                "status": 1,
                                "target": "5",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 40,
                                "yaw": 131
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "4",
                        "status": 1,
                        "yaw": 20
                    },
                    {
                        "file": "yopit_05",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -27,
                                "status": 1,
                                "target": "6",
                                "target_hfov": 110,
                                "target_pitch": 3,
                                "target_yaw": -31,
                                "yaw": 122
                            },
                            {
                                "pitch": -13,
                                "status": 1,
                                "target": "7",
                                "target_hfov": 110,
                                "target_pitch": 2,
                                "target_yaw": 19,
                                "yaw": 139
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "5",
                        "status": 1,
                        "yaw": 40
                    },
                    {
                        "file": "yopit_06",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -14,
                                "status": 1,
                                "target": "7",
                                "target_hfov": 110,
                                "target_pitch": 2,
                                "target_yaw": 19,
                                "yaw": 78
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "6",
                        "status": 1,
                        "yaw": -31
                    },
                    {
                        "file": "yopit_07",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -9,
                                "status": 1,
                                "target": "8",
                                "target_hfov": 110,
                                "target_pitch": -4,
                                "target_yaw": -101,
                                "yaw": 7
                            },
                            {
                                "pitch": -5,
                                "status": 1,
                                "target": "9",
                                "target_hfov": 110,
                                "target_pitch": -12,
                                "target_yaw": 24,
                                "yaw": 62
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 2,
                        "scene": "7",
                        "status": 1,
                        "yaw": 19
                    },
                    {
                        "file": "yopit_08",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -13,
                                "status": 1,
                                "target": "7",
                                "target_hfov": 110,
                                "target_pitch": 2,
                                "target_yaw": 19,
                                "yaw": -102
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -4,
                        "scene": "8",
                        "status": 1,
                        "yaw": -101
                    },
                    {
                        "file": "yopit_09",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "10",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": 38,
                                "yaw": 174
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -12,
                        "scene": "9",
                        "status": 1,
                        "yaw": 24
                    },
                    {
                        "file": "yopit_10",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -18,
                                "status": 1,
                                "target": "11",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": 34,
                                "yaw": -57
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "10",
                        "status": 1,
                        "yaw": 38
                    },
                    {
                        "file": "yopit_11",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -20,
                                "status": 1,
                                "target": "12",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": 50,
                                "yaw": 127
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "11",
                        "status": 1,
                        "yaw": 34
                    },
                    {
                        "file": "yopit_12",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -15,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 3,
                                "target_yaw": 21,
                                "yaw": 98
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -1,
                        "scene": "12",
                        "status": 1,
                        "yaw": 50
                    }
                ],
                "slug": "yoga-pitha",
                "time": "Mar 26, 2008"
            },
            {
                "audio": [
                    {
                        "file": "guruvandan",
                        "label": "Guru Vandana"
                    }
                ],
                "book": "navadvip_dham.pdf#page=72",
                "label": "Sri Bhaktisiddhanta Saraswati Samadhi",
                "scenes": [
                    {
                        "file": "bsstsamadhi_01",
                        "hfov": 120,
                        "hotspots": [
                            {
                                "pitch": -14,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 95,
                                "target_pitch": -5,
                                "target_yaw": 16,
                                "yaw": -138
                            },
                            {
                                "pitch": -6,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -12,
                                "target_yaw": -35,
                                "yaw": 43
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -6,
                        "scene": "1",
                        "status": 1,
                        "yaw": -12
                    },
                    {
                        "file": "bsstsamadhi_02",
                        "hfov": 95,
                        "hotspots": [
                            {
                                "pitch": -18,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 120,
                                "target_pitch": -6,
                                "target_yaw": -12,
                                "yaw": -160
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -5,
                        "scene": "2",
                        "status": 1,
                        "yaw": 16
                    },
                    {
                        "file": "bsstsamadhi_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -6,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -6,
                                "target_yaw": -12,
                                "yaw": 137
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -12,
                        "scene": "3",
                        "status": 1,
                        "yaw": -35
                    }
                ],
                "slug": "bhaktisiddhanta-saraswati-samadhi",
                "time": "Mar 27, 2008"
            }
        ],
        "slug": "navadvipa"
    },
    "vrindavan": {
        "label": "Sri Vrindavan",
        "places": [
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    }
                ],
                "book": "vraj_mandal.pdf#page=259",
                "label": "Sri Vamshi Vat",
                "scenes": [
                    {
                        "file": "vamvat_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -26,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -5,
                                "target_yaw": 154,
                                "yaw": -26
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 4,
                        "scene": "1",
                        "status": 1,
                        "yaw": -19
                    },
                    {
                        "file": "vamvat_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -21,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 4,
                                "target_yaw": -19,
                                "yaw": -15
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -5,
                        "scene": "2",
                        "status": 1,
                        "yaw": 154
                    }
                ],
                "slug": "vamshi-vat",
                "time": "Mar 9, 2008"
            },
            {
                "audio": [
                    {
                        "file": "rraman01",
                        "label": "Radha Raman Bhajan"
                    }
                ],
                "book": "vraj_mandal.pdf#page=290",
                "label": "Sri Radha Shyamasundar Mandir",
                "scenes": [
                    {
                        "file": "rsyam_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -19,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -4,
                                "target_yaw": -29,
                                "yaw": -33
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -1,
                        "scene": "1",
                        "status": 1,
                        "yaw": 29
                    },
                    {
                        "file": "rsyam_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -16,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": 29,
                                "yaw": 33
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -4,
                        "scene": "2",
                        "status": 1,
                        "yaw": -29
                    }
                ],
                "slug": "radha-shyamasundar",
                "time": "Mar 9, 2008"
            },
            {
                "audio": [
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    },
                    {
                        "file": "rraman01",
                        "label": "Radha Raman Bhajan"
                    }
                ],
                "book": "vraj_mandal.pdf#page=288",
                "label": "Sri Radha Gokulananda Mandir",
                "scenes": [
                    {
                        "file": "rgokul_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -19,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 7,
                                "yaw": 164
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "1",
                        "status": 1,
                        "yaw": 32
                    },
                    {
                        "file": "rgokul_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -13,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": 32,
                                "yaw": 81
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "2",
                        "status": 1,
                        "yaw": 7
                    }
                ],
                "slug": "radha-gokulananda",
                "time": "Mar 8, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "damodarastaka",
                        "label": "Damodara Astaka"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=230",
                "label": "Sri Seva Kunja",
                "scenes": [
                    {
                        "file": "sevakunj_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -15,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -9,
                                "target_yaw": -11,
                                "yaw": 157
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 6,
                        "scene": "1",
                        "status": 1,
                        "yaw": -97
                    },
                    {
                        "file": "sevakunj_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -25,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": 12,
                                "yaw": -142
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -9,
                        "scene": "2",
                        "status": 1,
                        "yaw": -11
                    },
                    {
                        "file": "sevakunj_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": 20,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 6,
                                "target_yaw": -97,
                                "yaw": -167
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "3",
                        "status": 1,
                        "yaw": 12
                    }
                ],
                "slug": "seva-kunja",
                "time": "Mar 9, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "damodarastaka",
                        "label": "Damodara Astaka"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=274",
                "label": "Sri Madana Mohan Mandir",
                "scenes": [
                    {
                        "file": "mmohan_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -2,
                                "target_yaw": 11,
                                "yaw": -107
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "1",
                        "status": 1,
                        "yaw": 13
                    },
                    {
                        "file": "mmohan_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -8,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 11,
                                "target_yaw": 143,
                                "yaw": -49
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -2,
                        "scene": "2",
                        "status": 1,
                        "yaw": 11
                    },
                    {
                        "file": "mmohan_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -7,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 13,
                                "yaw": 86
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 11,
                        "scene": "3",
                        "status": 1,
                        "yaw": 143
                    }
                ],
                "slug": "madana-mohan",
                "time": "Mar 6, 2008"
            },
            {
                "audio": [
                    {
                        "file": "gitagovs",
                        "label": "Gita Govinda"
                    },
                    {
                        "file": "rraman01",
                        "label": "Radha Raman Bhajan"
                    }
                ],
                "book": "vraj_mandal.pdf#page=286",
                "label": "Sri Radha Raman Mandir",
                "scenes": [
                    {
                        "file": "rraman_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -5,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 8,
                                "target_yaw": 10,
                                "yaw": 36
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "1",
                        "status": 1,
                        "yaw": 2
                    },
                    {
                        "file": "rraman_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -36,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": -7,
                                "yaw": 142
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 8,
                        "scene": "2",
                        "status": 1,
                        "yaw": 10
                    },
                    {
                        "file": "rraman_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -19,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 3,
                                "target_yaw": 2,
                                "yaw": -74
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -1,
                        "scene": "3",
                        "status": 1,
                        "yaw": -7
                    }
                ],
                "slug": "radha-raman",
                "time": "Mar 8, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "damodarastaka",
                        "label": "Damodara Astaka"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=256",
                "label": "Sri Dhir Samir",
                "scenes": [
                    {
                        "file": "dhisam_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -14,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": -37,
                                "yaw": 102
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -2,
                        "scene": "1",
                        "status": 1,
                        "yaw": 85
                    },
                    {
                        "file": "dhisam_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -15,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -2,
                                "target_yaw": 85,
                                "yaw": 164
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "2",
                        "status": 1,
                        "yaw": -37
                    }
                ],
                "slug": "dhir-samir",
                "time": "Mar 8, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "damodarastaka",
                        "label": "Damodara Astaka"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=228",
                "label": "Sri Advaita Vat",
                "scenes": [
                    {
                        "file": "advat_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -22,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -8,
                                "target_yaw": 29,
                                "yaw": -28
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 4,
                        "scene": "1",
                        "status": 1,
                        "yaw": -56
                    },
                    {
                        "file": "advat_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -24,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 4,
                                "target_yaw": -56,
                                "yaw": -65
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -8,
                        "scene": "2",
                        "status": 1,
                        "yaw": 29
                    }
                ],
                "slug": "advaita-vat",
                "time": "Mar 7, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "damodarastaka",
                        "label": "Damodara Astaka"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=222",
                "label": "Sri Kaliya Ghat",
                "scenes": [
                    {
                        "file": "kalidah_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 9,
                                "target_yaw": 147,
                                "yaw": -135
                            },
                            {
                                "pitch": -13,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -13,
                                "target_yaw": 30,
                                "yaw": 127
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "1",
                        "status": 1,
                        "yaw": -54
                    },
                    {
                        "file": "kalidah_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -13,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": -54,
                                "yaw": -36
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 9,
                        "scene": "2",
                        "status": 1,
                        "yaw": 147
                    },
                    {
                        "file": "kalidah_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -25,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": -54,
                                "yaw": -146
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -13,
                        "scene": "3",
                        "status": 1,
                        "yaw": 30
                    }
                ],
                "slug": "kaliya-ghat",
                "time": "Mar 10, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "damodarastaka",
                        "label": "Damodara Astaka"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=248",
                "label": "Sri Keshi Ghat",
                "scenes": [
                    {
                        "file": "kesigh_01",
                        "hfov": 110,
                        "hotspots": [
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 3,
                        "scene": "1",
                        "status": 1,
                        "yaw": 131
                    }
                ],
                "slug": "keshi-ghat",
                "time": "Mar 21, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "damodarastaka",
                        "label": "Damodara Astaka"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=281",
                "label": "Sri Sanatan Goswami Samadhi",
                "scenes": [
                    {
                        "file": "sansam_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -11,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -15,
                                "target_yaw": 114,
                                "yaw": -30
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -7,
                        "scene": "1",
                        "status": 1,
                        "yaw": 76
                    },
                    {
                        "file": "sansam_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -5,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": 11,
                                "yaw": -66
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -15,
                        "scene": "2",
                        "status": 1,
                        "yaw": 114
                    },
                    {
                        "file": "sansam_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -14,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -7,
                                "target_yaw": 76,
                                "yaw": -7
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -1,
                        "scene": "3",
                        "status": 1,
                        "yaw": 11
                    }
                ],
                "slug": "sanatan-goswami-samadhi",
                "time": "Mar 5, 2008"
            },
            {
                "audio": [
                    {
                        "file": "imli01",
                        "label": "Imli Tala Kirtan"
                    }
                ],
                "book": "vraj_mandal.pdf#page=237",
                "label": "Sri Imli Tala Mandir",
                "scenes": [
                    {
                        "file": "imli_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -2,
                                "target_yaw": -1,
                                "yaw": 8
                            },
                            {
                                "pitch": -18,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -2,
                                "target_yaw": 4,
                                "yaw": 99
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "1",
                        "status": 1,
                        "yaw": 25
                    },
                    {
                        "file": "imli_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -9,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": 2,
                                "target_yaw": 30,
                                "yaw": -25
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -2,
                        "scene": "2",
                        "status": 1,
                        "yaw": -1
                    },
                    {
                        "file": "imli_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -15,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": 2,
                                "target_yaw": 30,
                                "yaw": 90
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -2,
                        "scene": "3",
                        "status": 1,
                        "yaw": 4
                    },
                    {
                        "file": "imli_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -26,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 25,
                                "yaw": -151
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 2,
                        "scene": "4",
                        "status": 1,
                        "yaw": 30
                    }
                ],
                "slug": "imli-tala",
                "time": "Mar 3, 2008"
            },
            {
                "audio": [
                    {
                        "file": "rdamodar01",
                        "label": "Radha Damodar Kirtan 1"
                    },
                    {
                        "file": "rdamodar02",
                        "label": "Radha Damodar Kirtan 2"
                    }
                ],
                "book": "vraj_mandal.pdf#page=284",
                "label": "Sri Radha Damodar Mandir",
                "scenes": [
                    {
                        "file": "rdamodar_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -18,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 0,
                                "yaw": 127
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -14,
                        "scene": "1",
                        "status": 1,
                        "yaw": 45
                    },
                    {
                        "file": "rdamodar_02",
                        "hfov": 100,
                        "hotspots": [
                            {
                                "pitch": -11,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": 14,
                                "yaw": -35
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "2",
                        "status": 1,
                        "yaw": -6
                    },
                    {
                        "file": "rdamodar_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -22,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 100,
                                "target_pitch": 3,
                                "target_yaw": -7,
                                "yaw": 0
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "3",
                        "status": 1,
                        "yaw": 0
                    },
                    {
                        "file": "rdamodar_04",
                        "hfov": 100,
                        "hotspots": [
                            {
                                "pitch": -8,
                                "status": 1,
                                "target": "5",
                                "target_hfov": 100,
                                "target_pitch": -17,
                                "target_yaw": 12,
                                "yaw": -5
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "4",
                        "status": 1,
                        "yaw": 0
                    },
                    {
                        "file": "rdamodar_05",
                        "hfov": 100,
                        "hotspots": [
                            {
                                "pitch": -17,
                                "status": 1,
                                "target": "6",
                                "target_hfov": 100,
                                "target_pitch": -10,
                                "target_yaw": -10,
                                "yaw": 137
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "5",
                        "status": 1,
                        "yaw": 0
                    },
                    {
                        "file": "rdamodar_06",
                        "hfov": 100,
                        "hotspots": [
                            {
                                "pitch": -16,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -7,
                                "target_yaw": 50,
                                "yaw": 130
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "6",
                        "status": 1,
                        "yaw": 0
                    }
                ],
                "slug": "radha-damodar",
                "time": "Mar 6, 2008"
            },
            {
                "audio": [
                    {
                        "file": "rdamodar01",
                        "label": "Radha Damodar Kirtan 1"
                    },
                    {
                        "file": "rdamodar02",
                        "label": "Radha Damodar Kirtan 2"
                    }
                ],
                "book": "vraj_mandal.pdf#page=268",
                "label": "Sri Govindaji Mandir (old)",
                "scenes": [
                    {
                        "file": "govindji_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -1,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": -5,
                                "target_yaw": 123,
                                "yaw": 35
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 21,
                        "scene": "1",
                        "status": 1,
                        "yaw": 21
                    },
                    {
                        "file": "govindji_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -10,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": -18,
                                "yaw": 112
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -5,
                        "scene": "2",
                        "status": 1,
                        "yaw": 123
                    },
                    {
                        "file": "govindji_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -24,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": -36,
                                "target_yaw": 0,
                                "yaw": 11
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -1,
                        "scene": "3",
                        "status": 1,
                        "yaw": -18
                    },
                    {
                        "file": "govindji_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -5,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 21,
                                "target_yaw": 21,
                                "yaw": 134
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -36,
                        "scene": "4",
                        "status": 1,
                        "yaw": 0
                    }
                ],
                "slug": "govindaji",
                "time": "Mar 6, 2008"
            },
            {
                "audio": [
                    {
                        "file": "gitagovs",
                        "label": "Gita Govinda"
                    },
                    {
                        "file": "rdamodar01",
                        "label": "Radha Damodar Kirtan 1"
                    },
                    {
                        "file": "rdamodar02",
                        "label": "Radha Damodar Kirtan 2"
                    }
                ],
                "book": "vraj_mandal.pdf#page=219",
                "label": "Sri 64 Samadhi",
                "scenes": [
                    {
                        "file": "64sam_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -9,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 77,
                                "yaw": -56
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -3,
                        "scene": "1",
                        "status": 1,
                        "yaw": 0
                    },
                    {
                        "file": "64sam_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 43,
                                "yaw": -112
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "2",
                        "status": 1,
                        "yaw": 77
                    },
                    {
                        "file": "64sam_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -16,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": 2,
                                "target_yaw": 275,
                                "yaw": -41
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "3",
                        "status": 1,
                        "yaw": 43
                    },
                    {
                        "file": "64sam_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": -3,
                                "target_yaw": 0,
                                "yaw": 91
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 2,
                        "scene": "4",
                        "status": 1,
                        "yaw": 275
                    }
                ],
                "slug": "64-samadhi",
                "time": "Mar 7, 2008"
            },
            {
                "audio": [
                    {
                        "file": "sm_kirtan",
                        "label": "Swami Maharaja Kirtan"
                    },
                    {
                        "file": "sm_jrm",
                        "label": "Jaya Radha Madhava"
                    }
                ],
                "book": "vraj_mandal.pdf#page=302",
                "label": "Sri Krishna Balaram Mandir",
                "scenes": [
                    {
                        "file": "kbalaram_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -4,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 30,
                                "yaw": 4
                            },
                            {
                                "pitch": -4,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 4,
                                "target_yaw": 12,
                                "yaw": -162
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 6,
                        "scene": "1",
                        "status": 1,
                        "yaw": -20
                    },
                    {
                        "file": "kbalaram_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -12,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 0,
                                "yaw": 156
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "2",
                        "status": 1,
                        "yaw": 0
                    },
                    {
                        "file": "kbalaram_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": 0,
                                "status": 1,
                                "target": "4",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 0,
                                "yaw": 0
                            },
                            {
                                "pitch": -8,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": 0,
                                "yaw": -160
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "3",
                        "status": 1,
                        "yaw": 0
                    },
                    {
                        "file": "kbalaram_04",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -10,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": -160,
                                "yaw": 160
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "4",
                        "status": 1,
                        "yaw": -12
                    }
                ],
                "slug": "krishna-balaram-mandir",
                "time": "Mar 7, 2008"
            },
            {
                "audio": [
                    {
                        "file": "ramanisiromani",
                        "label": "Ramani Siromani"
                    },
                    {
                        "file": "radhejayajaya",
                        "label": "Radhe Jaya Jaya"
                    },
                    {
                        "file": "damodarastaka",
                        "label": "Damodara Astaka"
                    },
                    {
                        "file": "srirupamanjaripada",
                        "label": "Sri Rupa Manjari Pada"
                    },
                    {
                        "file": "jayajayasundara",
                        "label": "Jaya Jaya Sundara"
                    }
                ],
                "book": "vraj_mandal.pdf#page=251",
                "label": "Sri Nidhuvan",
                "scenes": [
                    {
                        "file": "nidhuv_01",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -7,
                                "status": 1,
                                "target": "2",
                                "target_hfov": 110,
                                "target_pitch": 0,
                                "target_yaw": -27,
                                "yaw": 88
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 1,
                        "scene": "1",
                        "status": 1,
                        "yaw": 79
                    },
                    {
                        "file": "nidhuv_02",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": -11,
                                "status": 1,
                                "target": "3",
                                "target_hfov": 110,
                                "target_pitch": -1,
                                "target_yaw": 242,
                                "yaw": 11
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": 0,
                        "scene": "2",
                        "status": 1,
                        "yaw": -27
                    },
                    {
                        "file": "nidhuv_03",
                        "hfov": 110,
                        "hotspots": [
                            {
                                "pitch": 27,
                                "status": 1,
                                "target": "1",
                                "target_hfov": 110,
                                "target_pitch": 1,
                                "target_yaw": 79,
                                "yaw": 42
                            }
                        ],
                        "max_hfov": 120,
                        "min_hfov": 50,
                        "pitch": -1,
                        "scene": "3",
                        "status": 1,
                        "yaw": 242
                    }
                ],
                "slug": "nidhuvan",
                "time": "Mar 8, 2008"
            }
        ],
        "slug": "vrindavan"
    }
}

const audio = [
    {
        "file": "gitagovs",
        "label": "Gita Govinda"
    },
    {
        "file": "ndvip01",
        "label": "Navadvipa Surround"
    },
    {
        "file": "rdamodar01",
        "label": "Radha Damodar Kirtan 1"
    },
    {
        "file": "rdamodar02",
        "label": "Radha Damodar Kirtan 2"
    },
    {
        "file": "imli01",
        "label": "Imli Tala Kirtan"
    },
    {
        "file": "radhak01",
        "label": "Radha Kunda Bhajan 1"
    },
    {
        "file": "radhak02",
        "label": "Radha Kunda Bhajan 2"
    },
    {
        "file": "devadideva",
        "label": "Deva Adi Deva"
    },
    {
        "file": "ramanisiromani",
        "label": "Ramani Siromani"
    },
    {
        "file": "radhejayajaya",
        "label": "Radhe Jaya Jaya"
    },
    {
        "file": "damodarastaka",
        "label": "Damodara Astaka"
    },
    {
        "file": "srirupamanjaripada",
        "label": "Sri Rupa Manjari Pada"
    },
    {
        "file": "guruvandan",
        "label": "Guru Vandana"
    },
    {
        "file": "jayajayasundara",
        "label": "Jaya Jaya Sundara"
    },
    {
        "file": "sm_kirtan",
        "label": "Swami Maharaja Kirtan"
    },
    {
        "file": "yopit01",
        "label": "Yoga Pitha Surround"
    },
    {
        "file": "rraman01",
        "label": "Radha Raman Bhajan"
    },
    {
        "file": "sm_jrm",
        "label": "Jaya Radha Madhava"
    }
]



const filtered = (key, value) => {
    function iter(o) {
        if (!o || typeof o !== 'object') {
            return
        }
        if (o[key] === value) {
            result.push(o)
        }
        Object.keys(o).forEach(function (k) {
            iter(o[k])
        })
    }

    let result = []
    iter(data)
    return result;
}

const dhamaBySlug = slug => {
    const found = data.find(dhamaData => {
        return dhamaData.slug == slug
    })
    return found
}

const darshanBySlug = slug => {
    var result = {}
    var dhama = {}
    Object.values(data).every(dhamaData => {
        const found = dhamaData.places.find(darshanData => {
            return darshanData.slug == slug
        })
        if (found) {
            result = found
            dhama = {label: dhamaData.label, slug: dhamaData.slug}
            return false
        } else {
            return true
        }
    })
    result.dhama = dhama

    return result
}

const chunkedAudio = () => {
    return _.chunk(_.sortBy(audio, sound => { return sound.label; }), 6)
}

export { data, audio, filtered, dhamaBySlug, darshanBySlug, chunkedAudio }