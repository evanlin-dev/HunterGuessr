import React, { useState, useEffect, useRef } from 'react';
import ReactPannellum, { addScene, loadScene } from "react-pannellum";
import axios from 'axios';
import './Pano.css';
import { Graph } from 'react-d3-graph';
import { Flip } from '@mui/icons-material';

const sceneConnections = {
    // East Building Floor 1
    "east_1_hallway1.jpg": {
        id: 133,
        connections: [{
            target: "east_1_hallway2.jpg",
            targetId: 134,
            yaw: 90,
            pitch: 0,
            text: "To Hallway 2"
        }]
    },
    "east_1_hallway2.jpg": {
        id: 134,
        connections: [{
            target: "east_1_hallway1.jpg",
            targetId: 133,
            yaw: 270,
            pitch: 0,
            text: "Back to Hallway 1"
        }]
    },

    // East Building Floor 4
    "east_4_room402.jpg": {
        id: 135,
        connections: [] 
    },

    // East Building Floor 5
    "east_5_mainarea.jpg": {
        id: 136,
        connections: [] 
    },

    // East Building Floor 6
    "east_6_lockers.jpg": {
        id: 137,
        connections: [
            {
                target: "east_6_mainarea.jpg",
                targetId: 138,
                yaw: 90,
                pitch: 0,
                text: "To Main Area"
            },
            {
                target: "east_6_outletarea.jpg",
                targetId: 139,
                yaw: 180,
                pitch: 0,
                text: "To Outlet Area"
            }
        ]
    },
    "east_6_mainarea.jpg": {
        id: 138,
        connections: [
            {
                target: "east_6_lockers.jpg",
                targetId: 137,
                yaw: 270,
                pitch: 0,
                text: "To Lockers"
            },
            {
                target: "east_6_room620A.jpg",
                targetId: 140,
                yaw: 0,
                pitch: 0,
                text: "To Room 620A"
            },
            {
                target: "east_6_room620B.jpg",
                targetId: 141,
                yaw: 90,
                pitch: 0,
                text: "To Room 620B"
            }
        ]
    },
    "east_6_outletarea.jpg": {
        id: 139,
        connections: [
            {
                target: "east_6_mainarea.jpg",
                targetId: 138,
                yaw: 0,
                pitch: 0,
                text: "To Main Area"
            },
            {
                target: "east_6_lockers.jpg",
                targetId: 137,
                yaw: 180,
                pitch: 0,
                text: "To Lockers"
            }
        ]
    },
    "east_6_room620A.jpg": {
        id: 140,
        connections: [{
            target: "east_6_mainarea.jpg",
            targetId: 138,
            yaw: 180,
            pitch: 0,
            text: "Back to Main Area"
        }]
    },
    "east_6_room620B.jpg": {
        id: 141,
        connections: [{
            target: "east_6_mainarea.jpg",
            targetId: 138,
            yaw: 270,
            pitch: 0,
            text: "Back to Main Area"
        }]
    },

    // East Building Floor 7
    "east_7_entrance.jpg": {
        id: 142,
        connections: [{
            target: "east_7_mainarea.jpg",
            targetId: 143,
            yaw: 90,
            pitch: 0,
            text: "To Main Area"
        }]
    },
    "east_7_mainarea.jpg": {
        id: 143,
        connections: [
            {
                target: "east_7_entrance.jpg",
                targetId: 142,
                yaw: 270,
                pitch: 0,
                text: "To Entrance"
            },
            {
                target: "east_7_sciencecenter.jpg",
                targetId: 144,
                yaw: 90,
                pitch: 0,
                text: "To Science Center"
            },
            {
                target: "east_7_writingcenter.jpg",
                targetId: 145,
                yaw: 180,
                pitch: 0,
                text: "To Writing Center"
            }
        ]
    },
    "east_7_sciencecenter.jpg": {
        id: 144,
        connections: [{
            target: "east_7_mainarea.jpg",
            targetId: 143,
            yaw: 270,
            pitch: 0,
            text: "Back to Main Area"
        }]
    },
    "east_7_writingcenter.jpg": {
        id: 145,
        connections: [{
            target: "east_7_mainarea.jpg",
            targetId: 143,
            yaw: 0,
            pitch: 0,
            text: "Back to Main Area"
        }]
    },



    // North Building Floor 10
    "north_10_hallway1.jpg": {
        id: 146,
        connections: [
            {
                target: "north_10_hallway2.jpg",
                targetId: 147,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            }
        ]
    },
    "north_10_hallway2.jpg": {
        id: 147,
        connections: [
            {
                target: "north_10_hallway1.jpg",
                targetId: 146,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            },
            {
                target: "north_10_hallway3.jpg",
                targetId: 148,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 3"
            }
        ]
    },
    "north_10_hallway3.jpg": {
        id: 148,
        connections: [
            {
                target: "north_10_hallway2.jpg",
                targetId: 147,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 2"
            }
        ]
    },
    // North Building Floor 1 
    "north_1_hallway1.jpg": {
        id: 149,
        connections: [
            {
                target: "north_1_hallway2.jpg",
                targetId: 150,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            }
        ]
    },
    "north_1_hallway2.jpg": {
        id: 150,
        connections: [
            {
                target: "north_1_hallway1.jpg",
                targetId: 149,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            },
            {
                target: "north_1_hallway3.jpg",
                targetId: 151,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 3"
            }
        ]
    },
    "north_1_hallway3.jpg": {
        id: 151,
        connections: [
            {
                target: "north_1_hallway2.jpg",
                targetId: 150,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 2"
            },
            {
                target: "north_1_hallway4.jpg",
                targetId: 152,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 4"
            }
        ]
    },
    "north_1_hallway4.jpg": {
        id: 152,
        connections: [
            {
                target: "north_1_hallway3.jpg",
                targetId: 151,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 3"
            },
            {
                target: "north_1_hallway5.jpg",
                targetId: 153,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 5"
            }
        ]
    },
    "north_1_hallway5.jpg": {
        id: 153,
        connections: [
            {
                target: "north_1_hallway4.jpg",
                targetId: 152,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 4"
            },
            {
                target: "north_1_hallway6.jpg",
                targetId: 154,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 6"
            }
        ]
    },
    "north_1_hallway6.jpg": {
        id: 154,
        connections: [
            {
                target: "north_1_hallway5.jpg",
                targetId: 153,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 5"
            },
            {
                target: "north_1_hallway7.jpg",
                targetId: 155,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 7"
            }
        ]
    },
    "north_1_hallway7.jpg": {
        id: 155,
        connections: [
            {
                target: "north_1_hallway6.jpg",
                targetId: 154,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 6"
            }
        ]
    },

    // North Building Floor 2 
    "north_2_auditorium.jpg": {
        id: 156,
        connections: [
            {
                target: "north_2_auditorium2.jpg",
                targetId: 157,
                yaw: 90,
                pitch: 0,
                text: "To Second Auditorium View"
            },
            {
                target: "north_2_hallway1.jpg",
                targetId: 158,
                yaw: 180,
                pitch: 0,
                text: "To Hallway"
            }
        ]
    },
    "north_2_auditorium2.jpg": {
        id: 157,
        connections: [
            {
                target: "north_2_auditorium.jpg",
                targetId: 156,
                yaw: 270,
                pitch: 0,
                text: "Back to Main Auditorium View"
            }
        ]
    },
    "north_2_hallway1.jpg": {
        id: 158,
        connections: [
            {
                target: "north_2_hallway2.jpg",
                targetId: 159,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            },
            {
                target: "north_2_auditorium.jpg",
                targetId: 156,
                yaw: 0,
                pitch: 0,
                text: "To Auditorium"
            }
        ]
    },
    "north_2_hallway2.jpg": {
        id: 159,
        connections: [
            {
                target: "north_2_hallway1.jpg",
                targetId: 158,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            },
            {
                target: "north_2_hallway3.jpg",
                targetId: 160,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 3"
            }
        ]
    },
    "north_2_hallway3.jpg": {
        id: 160,
        connections: [
            {
                target: "north_2_hallway2.jpg",
                targetId: 159,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 2"
            },
            {
                target: "north_2_hallway4.jpg",
                targetId: 161,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 4"
            }
        ]
    },
    "north_2_hallway4.jpg": {
        id: 161,
        connections: [
            {
                target: "north_2_hallway3.jpg",
                targetId: 160,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 3"
            },
            {
                target: "north_2_hallway5.jpg",
                targetId: 162,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 5"
            }
        ]
    },
    "north_2_hallway5.jpg": {
        id: 162,
        connections: [
            {
                target: "north_2_hallway4.jpg",
                targetId: 161,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 4"
            }
        ]
    },

    // North Building Floor 3 
    "north_3_hallway1.jpg": {
        id: 163,
        connections: [
            {
                target: "north_3_hallway2.jpg",
                targetId: 164,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            }
        ]
    },
    "north_3_hallway2.jpg": {
        id: 164,
        connections: [
            {
                target: "north_3_hallway1.jpg",
                targetId: 163,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            },
            {
                target: "north_3_hallway3.jpg",
                targetId: 165,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 3"
            }
        ]
    },
    "north_3_hallway3.jpg": {
        id: 165,
        connections: [
            {
                target: "north_3_hallway2.jpg",
                targetId: 164,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 2"
            },
            {
                target: "north_3_hallway4.jpg",
                targetId: 166,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 4"
            }
        ]
    },
    "north_3_hallway4.jpg": {
        id: 166,
        connections: [
            {
                target: "north_3_hallway3.jpg",
                targetId: 165,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 3"
            },
            {
                target: "north_3_hallway5.jpg",
                targetId: 167,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 5"
            }
        ]
    },
    "north_3_hallway5.jpg": {
        id: 167,
        connections: [
            {
                target: "north_3_hallway4.jpg",
                targetId: 166,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 4"
            },
            {
                target: "north_3_hallway6.jpg",
                targetId: 168,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 6"
            }
        ]
    },
    "north_3_hallway6.jpg": {
        id: 168,
        connections: [
            {
                target: "north_3_hallway5.jpg",
                targetId: 167,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 5"
            }
        ]
    },

    // North Building Floor 4
    "north_4_hallway1.jpg": {
        id: 169,
        connections: [
            {
                target: "north_4_hallway2.jpg",
                targetId: 170,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            }
        ]
    },
    "north_4_hallway2.jpg": {
        id: 170,
        connections: [
            {
                target: "north_4_hallway1.jpg",
                targetId: 169,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            },
            {
                target: "north_4_hallway3.jpg",
                targetId: 171,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 3"
            }
        ]
    },
    "north_4_hallway3.jpg": {
        id: 171,
        connections: [
            {
                target: "north_4_hallway2.jpg",
                targetId: 170,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 2"
            },
            {
                target: "north_4_hallway4.jpg",
                targetId: 172,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 4"
            }
        ]
    },
    "north_4_hallway4.jpg": {
        id: 172,
        connections: [
            {
                target: "north_4_hallway3.jpg",
                targetId: 171,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 3"
            }
        ]
    },

    // North Building Floor 5 (hallways 1 to 6)
    "north_5_hallway1.jpg": {
        id: 173,
        connections: [
            {
                target: "north_5_hallway2.jpg",
                targetId: 174,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            }
        ]
    },
    "north_5_hallway2.jpg": {
        id: 174,
        connections: [
            {
                target: "north_5_hallway1.jpg",
                targetId: 173,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            },
            {
                target: "north_5_hallway3.jpg",
                targetId: 175,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 3"
            }
        ]
    },
    "north_5_hallway3.jpg": {
        id: 175,
        connections: [
            {
                target: "north_5_hallway2.jpg",
                targetId: 174,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 2"
            },
            {
                target: "north_5_hallway4.jpg",
                targetId: 176,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 4"
            }
        ]
    },
    "north_5_hallway4.jpg": {
        id: 176,
        connections: [
            {
                target: "north_5_hallway3.jpg",
                targetId: 175,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 3"
            },
            {
                target: "north_5_hallway5.jpg",
                targetId: 177,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 5"
            }
        ]
    },
    "north_5_hallway5.jpg": {
        id: 177,
        connections: [
            {
                target: "north_5_hallway4.jpg",
                targetId: 176,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 4"
            },
            {
                target: "north_5_hallway6.jpg",
                targetId: 178,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 6"
            }
        ]
    },
    "north_5_hallway6.jpg": {
        id: 178,
        connections: [
            {
                target: "north_5_hallway5.jpg",
                targetId: 177,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 5"
            }
        ]
    },

    // North Building Floor 6 (hallways 1 to 6)
    "north_6_hallway1.jpg": {
        id: 179,
        connections: [
            {
                target: "north_6_hallway2.jpg",
                targetId: 180,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            }
        ]
    },
    "north_6_hallway2.jpg": {
        id: 180,
        connections: [
            {
                target: "north_6_hallway1.jpg",
                targetId: 179,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            },
            {
                target: "north_6_hallway3.jpg",
                targetId: 181,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 3"
            }
        ]
    },
    "north_6_hallway3.jpg": {
        id: 181,
        connections: [
            {
                target: "north_6_hallway2.jpg",
                targetId: 180,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 2"
            },
            {
                target: "north_6_hallway4.jpg",
                targetId: 182,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 4"
            }
        ]
    },
    "north_6_hallway4.jpg": {
        id: 182,
        connections: [
            {
                target: "north_6_hallway3.jpg",
                targetId: 181,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 3"
            },
            {
                target: "north_6_hallway5.jpg",
                targetId: 183,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 5"
            }
        ]
    },
    "north_6_hallway5.jpg": {
        id: 183,
        connections: [
            {
                target: "north_6_hallway4.jpg",
                targetId: 182,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 4"
            },
            {
                target: "north_6_hallway6.jpg",
                targetId: 184,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 6"
            }
        ]
    },
    "north_6_hallway6.jpg": {
        id: 184,
        connections: [
            {
                target: "north_6_hallway5.jpg",
                targetId: 183,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 5"
            }
        ]
    },

    // North Building Floor 7 (hallways 1 to 4)
    "north_7_hallway1.jpg": {
        id: 185,
        connections: [
            {
                target: "north_7_hallway2.jpg",
                targetId: 186,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            }
        ]
    },
    "north_7_hallway2.jpg": {
        id: 186,
        connections: [
            {
                target: "north_7_hallway1.jpg",
                targetId: 185,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            },
            {
                target: "north_7_hallway3.jpg",
                targetId: 187,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 3"
            }
        ]
    },
    "north_7_hallway3.jpg": {
        id: 187,
        connections: [
            {
                target: "north_7_hallway2.jpg",
                targetId: 186,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 2"
            },
            {
                target: "north_7_hallway4.jpg",
                targetId: 188,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 4"
            }
        ]
    },
    "north_7_hallway4.jpg": {
        id: 188,
        connections: [
            {
                target: "north_7_hallway3.jpg",
                targetId: 187,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 3"
            }
        ]
    },

    // North Building Floor 8 (hallways 1 to 4)
    "north_8_hallway1.jpg": {
        id: 189,
        connections: [
            {
                target: "north_8_hallway2.jpg",
                targetId: 190,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            }
        ]
    },
    "north_8_hallway2.jpg": {
        id: 190,
        connections: [
            {
                target: "north_8_hallway1.jpg",
                targetId: 189,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            },
            {
                target: "north_8_hallway3.jpg",
                targetId: 191,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 3"
            }
        ]
    },
    "north_8_hallway3.jpg": {
        id: 191,
        connections: [
            {
                target: "north_8_hallway2.jpg",
                targetId: 190,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 2"
            },
            {
                target: "north_8_hallway4.jpg",
                targetId: 192,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 4"
            }
        ]
    },
    "north_8_hallway4.jpg": {
        id: 192,
        connections: [
            {
                target: "north_8_hallway3.jpg",
                targetId: 191,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 3"
            }
        ]
    },

    // Thomas Hunter Building Floor 1 
    "thomashunter_1_hallway.jpg": {
        id: 193,
        connections: [
            {
                target: "thomashunter_1_staircase.jpg",
                targetId: 194,
                yaw: 90,
                pitch: 0,
                text: "To Staircase"
            }
        ]
    },
    "thomashunter_1_staircase.jpg": {
        id: 194,
        connections: [
            {
                target: "thomashunter_1_hallway.jpg",
                targetId: 193,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway"
            },
            {
                target: "thomashunter_1_staircase2.jpg",
                targetId: 195,
                yaw: 90,
                pitch: 0,
                text: "Up Stairs"
            }
        ]
    },
    "thomashunter_1_staircase2.jpg": {
        id: 195,
        connections: [
            {
                target: "thomashunter_1_staircase.jpg",
                targetId: 194,
                yaw: 270,
                pitch: 0,
                text: "Back Down"
            }
        ]
    },

    // Thomas Hunter Building Floor 2 (hallways 1 to 3)
    "thomashunter_2_hallway1.jpg": {
        id: 196,
        connections: [
            {
                target: "thomashunter_2_hallway2.jpg",
                targetId: 197,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            }
        ]
    },
    "thomashunter_2_hallway2.jpg": {
        id: 197,
        connections: [
            {
                target: "thomashunter_2_hallway1.jpg",
                targetId: 196,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            },
            {
                target: "thomashunter_2_hallway3.jpg",
                targetId: 198,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 3"
            }
        ]
    },
    "thomashunter_2_hallway3.jpg": {
        id: 198,
        connections: [
            {
                target: "thomashunter_2_hallway2.jpg",
                targetId: 197,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 2"
            }
        ]
    },

    // Thomas Hunter Building Floor 3 (hallways 1 to 3)
    "thomashunter_3_hallway1.jpg": {
        id: 199,
        connections: [
            {
                target: "thomashunter_3_hallway2.jpg",
                targetId: 200,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            }
        ]
    },
    "thomashunter_3_hallway2.jpg": {
        id: 200,
        connections: [
            {
                target: "thomashunter_3_hallway1.jpg",
                targetId: 199,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            },
            {
                target: "thomashunter_3_hallway3.jpg",
                targetId: 201,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 3"
            }
        ]
    },
    "thomashunter_3_hallway3.jpg": {
        id: 201,
        connections: [
            {
                target: "thomashunter_3_hallway2.jpg",
                targetId: 200,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 2"
            }
        ]
    },

    // Thomas Hunter Building Floor 4 
    "thomashunter_4_hallway.jpg": {
        id: 202,
        connections: []
    },

    // Thomas Hunter Building Floor 5 (hallways 1 to 2)
    "thomashunter_5_hallway1.jpg": {
        id: 203,
        connections: [
            {
                target: "thomashunter_5_hallway2.jpg",
                targetId: 204,
                yaw: 90,
                pitch: 0,
                text: "To Hallway 2"
            }
        ]
    },
    "thomashunter_5_hallway2.jpg": {
        id: 204,
        connections: [
            {
                target: "thomashunter_5_hallway1.jpg",
                targetId: 203,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway 1"
            }
        ]
    },

    // West Building Floor 2 
    "west_2_215.jpg": { id: 205, connections: [] },
    "west_2_w217.jpg": { id: 206, connections: [] },

    // West Building Floor 3 
    "west_3_cafe3.jpg": {
        id: 207,
        connections: [
            {
                target: "west_3_hallway3.jpg",
                targetId: 208,
                yaw: 90,
                pitch: 0,
                text: "To Hallway"
            },
            {
                target: "west_3_studyarea3.jpg",
                targetId: 211,
                yaw: 180,
                pitch: 0,
                text: "To Study Area"
            }
        ]
    },
    "west_3_hallway3.jpg": {
        id: 208,
        connections: [
            {
                target: "west_3_cafe3.jpg",
                targetId: 207,
                yaw: 270,
                pitch: 0,
                text: "To Cafe"
            },
            {
                target: "west_3_skybridgeeast3.jpg",
                targetId: 209,
                yaw: 90,
                pitch: 0,
                text: "To East Skybridge"
            },
            {
                target: "west_3_skybridgenorth3.jpg",
                targetId: 210,
                yaw: 0,
                pitch: 0,
                text: "To North Skybridge"
            }
        ]
    },
    "west_3_skybridgeeast3.jpg": {
        id: 209,
        connections: [
            {
                target: "west_3_hallway3.jpg",
                targetId: 208,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway"
            }
        ]
    },
    "west_3_skybridgenorth3.jpg": {
        id: 210,
        connections: [
            {
                target: "west_3_hallway3.jpg",
                targetId: 208,
                yaw: 180,
                pitch: 0,
                text: "Back to Hallway"
            }
        ]
    },
    "west_3_studyarea3.jpg": {
        id: 211,
        connections: [
            {
                target: "west_3_cafe3.jpg",
                targetId: 207,
                yaw: 0,
                pitch: 0,
                text: "Back to Cafe"
            }
        ]
    },
    "west_3_w309.jpg": { id: 212, connections: [] },

    // West Building Floor 5 
    "west_5_hallway5.jpg": {
        id: 213,
        connections: [
            {
                target: "west_5_studyarea5.jpg",
                targetId: 214,
                yaw: 90,
                pitch: 0,
                text: "To Study Area"
            },
            {
                target: "west_5_w505.jpg",
                targetId: 215,
                yaw: 0,
                pitch: 0,
                text: "To Room 505"
            }
        ]
    },
    "west_5_studyarea5.jpg": {
        id: 214,
        connections: [
            {
                target: "west_5_hallway5.jpg",
                targetId: 213,
                yaw: 270,
                pitch: 0,
                text: "Back to Hallway"
            },
            {
                target: "west_5_w506.jpg",
                targetId: 216,
                yaw: 90,
                pitch: 0,
                text: "To Room 506"
            }
        ]
    },
    "west_5_w505.jpg": {
        id: 215,
        connections: [
            {
                target: "west_5_hallway5.jpg",
                targetId: 213,
                yaw: 180,
                pitch: 0,
                text: "Back to Hallway"
            }
        ]
    },
    "west_5_w506.jpg": {
        id: 216,
        connections: [
            {
                target: "west_5_studyarea5.jpg",
                targetId: 214,
                yaw: 270,
                pitch: 0,
                text: "Back to Study Area"
            }
        ]
    },
    "west_5_w507.jpg": { id: 217, connections: [] },
    "west_5_w508.jpg": { id: 218, connections: [] },
    "west_5_w509.jpg": { id: 219, connections: [] },
    "west_5_w522.jpg": { id: 220, connections: [] },

    // West Building Floor 6 (no given connections)
    "west_6_hallway6.jpg": { id: 221, connections: [] },
    "west_6_studyarea6.jpg": { id: 222, connections: [] },
    "west_6_w604.jpg": { id: 223, connections: [] },
    "west_6_w610.jpg": { id: 224, connections: [] },
    "west_6_w611.jpg": { id: 225, connections: [] },
    "west_6_w615.jpg": { id: 226, connections: [] },

    // West Building Floor 7 (no given connections)
    "west_7_hallway7.jpg": { id: 227, connections: [] },
    "west_7_skybridge7.jpg": { id: 228, connections: [] },
    "west_7_studyarea7.jpg": { id: 229, connections: [] },
    "west_7_w706.jpg": { id: 230, connections: [] },
    "west_7_w708.jpg": { id: 231, connections: [] },
    "west_7_w714.jpg": { id: 232, connections: [] }
};

const Pano = () => {
    const [sceneId, setSceneId] = useState(0);
    const [selectedImage, setSelectedImage] = useState('');
    const [randomImage, setRandomImage] = useState(null);
    const pannellumRef = useRef();
    const [guessingEnabled, setGuessingEnabled] = useState(true);
    const [selectedNode, setSelectedNode] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const originalLocation = { x: 50, y: 50 };
    const [userLocation, setUserLocation] = useState({ x: null, y: null });
    const [score, setScore] = useState(100); // Initial score is 100
    const [round, setRound] = useState(0); // Initial round is 0
    const [isFloorplanVisible, setIsFloorplanVisible] = useState(true);
    const [selectedLocationBuilding, setSelectedLocationBuilding] = useState(null);
    const [selectedLocationFloor, setSelectedLocationFloor] = useState(null);
    const [selectedLocationRoom, setSelectedLocationRoom] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const [guessBool, setGuessBool] = useState(false); 

    const [buildings, setBuildings] = useState([]);
    const [floors, setFloors] = useState([]);
    const [rooms, setRooms] = useState([]);

    const [selectedBuilding, setSelectedBuilding] = useState('');
    const [selectedFloor, setSelectedFloor] = useState('');
    const [selectedRoom, setSelectedRoom] = useState('');

    const [usedImageIds, setUsedImageIds] = useState(new Set());

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const [isGraphModalVisible, setIsGraphModalVisible] = useState(false);
    const [graphData, setGraphData] = useState(null);
    const [visibleNodes, setVisibleNodes] = useState(new Set(['Buildings']));
    const [hotSpots, setHotSpots] = useState([]);
const [currentScene, setCurrentScene] = useState(null);
const [isNavigating, setIsNavigating] = useState(false);

const customStyles = `
   .custom-hotspot {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
}

.custom-hotspot:before {
    content: '→';
    font-size: 24px;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.custom-hotspot:hover {
    transform: translateY(-2px) scale(1.05);
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.custom-tooltip-wrapper {
    position: absolute;
    top: -45px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
}

.custom-tooltip {
    visibility: hidden;
    background: rgba(17, 24, 39, 0.95);
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    letter-spacing: 0.3px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateY(10px);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.custom-hotspot:hover .custom-tooltip {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
}

.custom-tooltip:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: inherit;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transform-origin: center;
    transform: translateX(-50%) rotate(45deg);
}

/* Add subtle pulse animation */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.custom-hotspot {
    animation: pulse 2s infinite;
    animation-play-state: paused;
}

.custom-hotspot:hover {
    animation-play-state: running;
}
`;
    const showModal = (message) => {
        setModalMessage(message);
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
        setModalMessage('');
    };

    const handleImageClick = (e) => {
        const imgElement = e.target;
        const canvas = imgElement.getBoundingClientRect();
        const Xaxis = e.clientX - canvas.left;
        const Yaxis = e.clientY - canvas.top;

        const clickPercentX = (Xaxis / imgElement.width) * 100;
        const clickPercentY = (Yaxis / imgElement.height) * 100;

        setUserLocation({ x: clickPercentX, y: clickPercentY });
        calculateScore(clickPercentX, clickPercentY);
    };

    const calculateScore = (Xaxis, Yaxis) => {
        const distance = Math.sqrt(
            Math.pow(originalLocation.x - Xaxis, 2) +
            Math.pow(originalLocation.y - Yaxis, 2)
        );

        const maxScore = 100;
        const points = Math.max(0, Math.floor((1 - distance / maxScore) * 100));

        setScore(points);
    };

    const config = {
        autoLoad: true,
    };

    const equirectangularOptions = {
        haov: 360,
        vaov: 90,
    };

    const loadNewScene = () => {
        loadScene(`scene-${sceneId}`);
        setSceneId(prevId => prevId + 1);
    };


    const handleHotspotClick = async (event, args) => {
        if (!args || !args.targetId) {
            console.error('Invalid hotspot arguments');
            return;
        }
        
        try {
            setIsLoading(true);
            
            // Find the scene information
            const sceneEntry = Object.entries(sceneConnections).find(([_, info]) => info.id === args.targetId);
            
            if (!sceneEntry) {
                throw new Error(`Scene information not found for ID: ${args.targetId}`);
            }
            
            const [fileName, sceneInfo] = sceneEntry;
    
            // Fetch the image data with blob response type
            const response = await axios.get(
                `https://hunterguessr-6d520ba70010.herokuapp.com/retrieve_image/${args.targetId}`,
                { responseType: 'blob' }
            );
    
            // Convert blob to base64
            const blobData = response.data;
            const base64Data = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result.split(',')[1]);
                reader.onerror = reject;
                reader.readAsDataURL(blobData);
            });
    
            // Create hotspots for the new scene
            const newHotspots = sceneInfo.connections.map(connection => ({
                pitch: connection.pitch,
                yaw: connection.yaw,
                type: "custom",
                cssClass: "custom-hotspot",
                createTooltipFunc: (hotSpotDiv, args) => {
                    hotSpotDiv.classList.add('custom-tooltip-wrapper');
                    const tooltip = document.createElement('div');
                    tooltip.classList.add('custom-tooltip');
                    tooltip.innerText = args;
                    hotSpotDiv.appendChild(tooltip);
                },
                createTooltipArgs: connection.text,
                clickHandlerFunc: handleHotspotClick,
                clickHandlerArgs: { targetId: connection.targetId }
            }));
    
            // Create and load the new scene
            const nextSceneId = sceneId + 1;
            const newSceneConfig = {
                type: "equirectangular",
                imageSource: `data:image/jpeg;base64,${base64Data}`,
                hotSpots: newHotspots,
                autoLoad: true,
                haov: 360,
                vaov: 90
            };
    
            addScene(`scene-${nextSceneId}`, newSceneConfig);
            loadScene(`scene-${nextSceneId}`);
            
            setSceneId(nextSceneId);
            setSelectedImage(`data:image/jpeg;base64,${base64Data}`);
            setHotSpots(newHotspots);
            setCurrentSceneId(args.targetId);
    
        } catch (error) {
            console.error('Error loading scene:', error);
            showModal('Error loading scene. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
   const [isPanoramaReady, setIsPanoramaReady] = useState(false);

   const fetchRandomImage = async () => {
       try {
           setIsLoading(true);
           setIsPanoramaReady(false);

           const response = await axios.get('https://hunterguessr-6d520ba70010.herokuapp.com/GrabImageForGuessing');
           const imageData = response.data;

           if (!imageData || !imageData.photo || !imageData.file_name) {
               throw new Error('Invalid image data received');
           }

           // Create base64 image source
           const imageSource = `data:image/jpeg;base64,${imageData.photo}`;

           // Create scene configuration
           const nextSceneId = sceneId + 1;
           const newSceneConfig = {
               type: "equirectangular",
               imageSource: imageSource,
               autoLoad: true,
               haov: 360,
               vaov: 90,
               hotSpots: []
           };

           const sceneInfo = sceneConnections[imageData.file_name];
           if (sceneInfo?.connections) {
               newSceneConfig.hotSpots = sceneInfo.connections.map(conn => ({
                   pitch: conn.pitch,
                   yaw: conn.yaw,
                   type: "custom",
                   cssClass: "custom-hotspot",
                   createTooltipFunc: (hotSpotDiv, args) => {
                       hotSpotDiv.classList.add('custom-tooltip-wrapper');
                       const tooltip = document.createElement('div');
                       tooltip.classList.add('custom-tooltip');
                       tooltip.innerText = args;
                       hotSpotDiv.appendChild(tooltip);
                   },
                   createTooltipArgs: conn.text,
                   clickHandlerFunc: handleHotspotClick,
                   clickHandlerArgs: { targetId: conn.targetId }
               }));
           }

           addScene(`scene-${nextSceneId}`, newSceneConfig);

           setSceneId(nextSceneId);
           setSelectedImage(imageSource);
           setRandomImage({
               ...imageData,
               building: imageData.file_name.split('_')[0],
               floor: imageData.file_name.split('_')[1],
               room: imageData.file_name.split('_')[2].replace('.jpg', '')
           });
           setHotSpots(newSceneConfig.hotSpots || []);
           
           setIsPanoramaReady(true);

           // Load scene after state is updated
           setTimeout(() => {
               loadScene(`scene-${nextSceneId}`);
               setElapsedTime(0);
               incrementRound();
           }, 100);

       } catch (error) {
           console.error('Error retrieving random image:', error);
           showModal('Error loading image. Please try again.');
       } finally {
           setIsLoading(false);
       }
   };
    const loadSceneById = async (targetId) => {
        try {
            const response = await axios.get(`https://hunterguessr-6d520ba70010.herokuapp.com/retrieve_image/${targetId}`);
            const imageData = response.data;
    
            if (imageData && imageData.photo) {
                // Find scene info from connections
                const sceneEntry = Object.entries(sceneConnections).find(([_, info]) => info.id === targetId);
                if (sceneEntry) {
                    const [fileName, sceneInfo] = sceneEntry;
                    
                    // Generate hotspots for the new scene
                    const hotspots = sceneInfo.connections.map(connection => ({
                        pitch: connection.pitch,
                        yaw: connection.yaw,
                        type: "custom",
                        cssClass: "custom-hotspot",
                        createTooltipFunc: (hotSpotDiv, args) => {
                            hotSpotDiv.classList.add('custom-tooltip-wrapper');
                            const tooltip = document.createElement('div');
                            tooltip.classList.add('custom-tooltip');
                            tooltip.innerText = args;
                            hotSpotDiv.appendChild(tooltip);
                        },
                        createTooltipArgs: connection.text,
                        clickHandlerFunc: (e, args) => {
                            loadSceneById(args.targetId);
                        },
                        clickHandlerArgs: { targetId: connection.targetId }
                    }));
    
                    // Add and load the new scene
                    addScene(`scene-${sceneId}`, {
                        type: "equirectangular",
                        imageSource: `data:image/jpeg;base64,${imageData.photo}`,
                        hotSpots: hotspots,
                        ...config
                    }, () => {
                        loadScene(`scene-${sceneId}`);
                        setSceneId(prev => prev + 1);
                    });
                }
            }
        } catch (error) {
            console.error('Error loading scene:', error);
            showModal('Error loading scene. Please try again.');
        }
    };

    const buildingData = {
        "east": {
            floors: ["1", "4", "5", "6", "7"],
            rooms: {
                "1": ["hallway1", "hallway2"],
                "4": ["room402"],
                "5": ["mainarea"],
                "6": ["lockers", "mainarea", "outletarea", "room620A", "room620B"],
                "7": ["entrance", "mainarea", "sciencecenter", "writingcenter"]
            }
        },
        "north": {
            floors: ["1", "2", "3", "4", "5", "6", "7", "8", "10"],
            rooms: {
                "1": ["hallway1", "hallway2", "hallway3", "hallway4", "hallway5", "hallway6", "hallway7"],
                "2": ["auditorium", "auditorium2", "hallway1", "hallway2", "hallway3", "hallway4", "hallway5"],
                "3": ["hallway1", "hallway2", "hallway3", "hallway4", "hallway5", "hallway6"],
                "4": ["hallway1", "hallway2", "hallway3", "hallway4"],
                "5": ["hallway1", "hallway2", "hallway3", "hallway4", "hallway5", "hallway6"],
                "6": ["hallway1", "hallway2", "hallway3", "hallway4", "hallway5", "hallway6"],
                "7": ["hallway1", "hallway2", "hallway3", "hallway4"],
                "8": ["hallway1", "hallway2", "hallway3", "hallway4"],
                "10": ["hallway1", "hallway2", "hallway3"]
            }
        },
        "thomashunter": {
            floors: ["1", "2", "3", "4", "5"],
            rooms: {
                "1": ["hallway", "staircase", "staircase2"],
                "2": ["hallway1", "hallway2", "hallway3"],
                "3": ["hallway1", "hallway2", "hallway3"],
                "4": ["hallway"],
                "5": ["hallway1", "hallway2"]
            }
        },
        "west": {
            floors: ["2", "3", "5", "6", "7"],
            rooms: {
                "2": ["215", "w217"],
                "3": ["cafe3", "hallway3", "skybridgeeast3", "skybridgenorth3", "studyarea3", "w309"],
                "5": ["hallway5", "studyarea5", "w505", "w506", "w507", "w508", "w509", "w522"],
                "6": ["hallway6", "studyarea6", "w604", "w610", "w611", "w615"],
                "7": ["hallway7", "skybridge7", "studyarea7", "w706", "w708", "w714"]
            }
        }
    };
    

    useEffect(() => {
        fetchRandomImage();
        setBuildings(Object.keys(buildingData));
    }, []);

    useEffect(() => {
        if (selectedBuilding) {
            setFloors(buildingData[selectedBuilding].floors);
            setSelectedFloor('');
            setRooms([]);
            setSelectedRoom('');
        } else {
            setFloors([]);
            setSelectedFloor('');
            setRooms([]);
            setSelectedRoom('');
        }
    }, [selectedBuilding]);

    useEffect(() => {
        if (selectedFloor && selectedBuilding) {
            setRooms(buildingData[selectedBuilding].rooms[selectedFloor]);
            setSelectedRoom('');
        } else {
            setRooms([]);
        }
    }, [selectedFloor, selectedBuilding]);

    const handleBuildingChange = (e) => {
        setSelectedBuilding(e.target.value);
    };

    const handleFloorChange = (e) => {
        setSelectedFloor(e.target.value);
    };

    const handleRoomChange = (e) => {
        setSelectedRoom(e.target.value);
    };

    const toggleFloorplan = () => {
        setIsFloorplanVisible(prevState => !prevState);
    };

    // Timer logic
    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(((totalSeconds % 3600) % 60));
        return hours === 0
            ? `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            : `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        if (isGraphModalVisible) {
            setGraphData(generateGraphData());
        }
    }, [isGraphModalVisible, visibleNodes]);

    const toggleGraphModal = () => {
        setIsGraphModalVisible(prev => !prev);
    };

    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            setIsGraphModalVisible(false);
        }
    };

    const handleNodeClick = (nodeId) => {
        if (!nodeId) return;
        
        const [building, floor, room] = nodeId.split('-');
        
        // Store selected location when a room is clicked
        if (room) {
            setSelectedLocationBuilding(building);
            setSelectedLocationFloor(floor);
            setSelectedLocationRoom(room);
            setSelectedNode(nodeId);
        }
        
        setVisibleNodes(prev => {
            const newNodes = new Set(prev);
            
            // Root "Buildings" node handling
            if (nodeId === "Buildings") {
                if (Object.keys(buildingData).some(b => newNodes.has(b))) {
                    return new Set(['Buildings']); // Collapse all
                } else {
                    Object.keys(buildingData).forEach(b => newNodes.add(b)); // Expand all
                    return newNodes;
                }
            }
            
            // Building node handling
            if (buildingData[nodeId]) {
                const floors = buildingData[nodeId].floors;
                const hasVisibleFloors = floors.some(f => newNodes.has(`${nodeId}-${f}`));
                
                floors.forEach(f => {
                    const floorId = `${nodeId}-${f}`;
                    if (hasVisibleFloors) {
                        // Collapse: remove floor and its rooms
                        newNodes.delete(floorId);
                        buildingData[nodeId].rooms[f]?.forEach(r => {
                            newNodes.delete(`${floorId}-${r}`);
                        });
                    } else {
                        // Expand: show floor
                        newNodes.add(floorId);
                    }
                });
                return newNodes;
            }
            
            // Floor node handling
            if (floor && !room) {
                const rooms = buildingData[building].rooms[floor] || [];
                const hasVisibleRooms = rooms.some(r => newNodes.has(`${nodeId}-${r}`));
                
                rooms.forEach(r => {
                    const roomId = `${nodeId}-${r}`;
                    if (hasVisibleRooms) {
                        newNodes.delete(roomId); // Collapse: remove rooms
                    } else {
                        newNodes.add(roomId); // Expand: show rooms
                    }
                });
                return newNodes;
            }
            
            return newNodes;
        });
    };
    const submitSelection = () => {
        if (selectedRoom) {
            alert(`Room "${selectedRoom}" selected!`);
            setIsGraphModalVisible(false);
        } else {
            alert("No room selected!");
        }
    };

    // Increment round funct, score carries over to next round based on guessBool
    const incrementRound = () => {
        // Increment round
        setRound(prevRound => prevRound + 1);
        // Reset score on new round
        if (guessBool) {
            setScore(prevScore => prevScore + 100);
        } else {
            setScore(prevScore => prevScore);
        }

        // Reset guessBool on new round
        setGuessBool(false);
    }

    // Guess is Wrong funct, TODO: Implement this
    const wrongGuess = () => {
        // Decrement score depending on how close the guess is, WRONG BUILDING: -50, WRONG FLOOR: -25, WRONG ROOM: -10
        if (selectedBuilding !== 'West Building') {
            setScore(prevScore => prevScore - 50);
            showModal('Incorrect Building');
        } else if (selectedFloor !== 'Floor 1') {
            setScore(prevScore => prevScore - 25);
            showModal('Incorrect Floor');
        } else if (selectedRoom !== 'West Room 101') {
            setScore(prevScore => prevScore - 10);
            showModal('Incorrect Room');
        }

        setGuessBool(false);
    }

    // Guess is Correct funct, TODO: Implement this
    const correctGuess = () => {
        // Increment score by 100
        setGuessBool(true);
        showModal('Correct Guess! Move on to the Next Image to recieve points!');
    }

    // Guess button click
    const guessClick = () => {
        if (!randomImage || !selectedLocationRoom) {
            showModal('Please select a specific room first');
            return;
        }
        
        const correctBuilding = randomImage.building;
        const correctFloor = randomImage.floor;
        const correctRoom = randomImage.room;
        
        let earnedPoints = 0;
        let message = '';
        
        // Calculate points for correct building (33 points)
        if (selectedLocationBuilding === correctBuilding) {
            earnedPoints += 33;
            message += 'Building: Correct! (+33 points)\n';
        } else {
            message += 'Building: Incorrect\n';
        }
        
        // Calculate points for correct floor (33 points)
        if (selectedLocationFloor === correctFloor) {
            earnedPoints += 33;
            message += 'Floor: Correct! (+33 points)\n';
        } else {
            message += 'Floor: Incorrect\n';
        }
        
        // Calculate points for correct room (34 points)
        if (selectedLocationRoom === correctRoom) {
            earnedPoints += 34;
            message += 'Room: Correct! (+34 points)';
        } else {
            message += 'Room: Incorrect';
        }
        
        // Update score and show results
        setScore(prevScore => prevScore + earnedPoints);
        showModal(`${message}\n\nTotal points earned: ${earnedPoints}`);
        fetchRandomImage();
        if (earnedPoints === 100) {
            setGuessingEnabled(false);
        }
    };
    
    const [currentSceneId, setCurrentSceneId] = useState(null);
    
    const loadConnectedScene = async (targetId) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://hunterguessr-6d520ba70010.herokuapp.com/retrieve_image/${targetId}`);
            
            if (!response.data || !response.data.photo) {
                console.error('Invalid image data received');
                return;
            }

            const imageData = response.data;
            const nextSceneId = sceneId + 1;

            // Find connected scene information
            const sceneInfo = Object.entries(sceneConnections).find(([_, info]) => info.id === targetId);
            if (!sceneInfo) return;

            const [fileName, info] = sceneInfo;

            const connectedHotspots = info.connections.map(conn => ({
                pitch: conn.pitch,
                yaw: conn.yaw,
                type: "custom",
                cssClass: "custom-hotspot",
                createTooltipFunc: (hotSpotDiv, args) => {
                    hotSpotDiv.classList.add('custom-tooltip-wrapper');
                    const tooltip = document.createElement('div');
                    tooltip.classList.add('custom-tooltip');
                    tooltip.innerText = args;
                    hotSpotDiv.appendChild(tooltip);
                },
                createTooltipArgs: conn.text,
                clickHandlerFunc: async (evt, args) => {
                    await loadConnectedScene(args.targetId);
                },
                clickHandlerArgs: { targetId: conn.targetId }
            }));

            // Create the new scene configuration
            const newScene = {
                type: "equirectangular",
                imageSource: `data:image/jpeg;base64,${imageData.photo}`,
                hotSpots: connectedHotspots,
                autoLoad: true,
                haov: 360,
                vaov: 90
            };

            addScene(`scene-${nextSceneId}`, newScene);
            loadScene(`scene-${nextSceneId}`);
            
            // Update state
            setSceneId(nextSceneId);
            setSelectedImage(`data:image/jpeg;base64,${imageData.photo}`);
            setCurrentSceneId(targetId);
            setHotSpots(connectedHotspots);

        } catch (error) {
            console.error('Error loading connected scene:', error);
            showModal('Error loading connected scene. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // save data for match hist - on next image click
    /*const saveData = () => {
        const data = {
            id: rows.length + 1, // Increment ID for new row
            name: 'User', // Replace with actual username
            time: formatTime(elapsedTime), // Format time
            score: score, // Score from current round
        };
        addRow(data);
    };*/
    const graphConfig = {
        directed: true,
        nodeHighlightBehavior: true,
        maxZoom: 1.5,
        minZoom: 0.5,
        panAndZoom: false,
        staticGraph: true,
        height: 800,
        width: 1400,
        node: {
            color: "#0EA5E9",
            size: 800,
            highlightStrokeColor: "#8B5CF6",
            highlightFontSize: 16,
            highlightFontWeight: "bold",
            labelPosition: "center",
            labelProperty: "label",
            fontSize: 15,
            renderLabel: true,
            symbolType: "circle",
            strokeWidth: 3,
            strokeColor: "rgba(255, 255, 255, 0.1)",
            fontColor: "rgba(255, 255, 255, 0.9)",
            highlightColor: "#8B5CF6",
            highlightStrokeWidth: 4
        },
        link: {
            color: "rgba(255, 255, 255, 0.1)",
            strokeWidth: 2,
            highlightColor: "rgba(139, 92, 246, 0.5)",
            type: "STRAIGHT",
            semanticStrokeWidth: false,
            renderLabel: false
        }
    };
    
    const generateGraphData = () => {
        const nodes = [];
        const links = [];
        
        const centerX = 700;
        const centerY = 330;
        const buildingRadius = 100;
        const floorRadius = 130;
        const roomRadius = 100;
        
        // Root node
        nodes.push({
            id: "Buildings",
            label: "Buildings",
            x: centerX,
            y: centerY,
            fx: centerX,
            fy: centerY
        });
        
        const buildings = Object.keys(buildingData);
        const buildingAngleStep = (2 * Math.PI) / buildings.length;
        
        buildings.forEach((building, index) => {
            const buildingAngle = buildingAngleStep * index - Math.PI / 2;
            const buildingX = centerX + buildingRadius * Math.cos(buildingAngle);
            const buildingY = centerY + buildingRadius * Math.sin(buildingAngle);
            
            nodes.push({
                id: building,
                label: building,
                x: buildingX,
                y: buildingY,
                fx: buildingX,
                fy: buildingY
            });
            links.push({ source: "Buildings", target: building });
            
            if (visibleNodes.has(building)) {
                const floors = buildingData[building].floors;
                const floorAngleStep = Math.PI / (floors.length + 1);
                
                floors.forEach((floor, floorIndex) => {
                    const floorId = `${building}-${floor}`;
                    if (visibleNodes.has(floorId)) {
                        const floorAngle = buildingAngle - Math.PI/4 + floorAngleStep * (floorIndex + 1);
                        const floorX = buildingX + floorRadius * Math.cos(floorAngle);
                        const floorY = buildingY + floorRadius * Math.sin(floorAngle);
                        
                        nodes.push({
                            id: floorId,
                            label: `Floor ${floor}`,
                            x: floorX,
                            y: floorY,
                            fx: floorX,
                            fy: floorY
                        });
                        links.push({ source: building, target: floorId });
                        
                        const rooms = buildingData[building].rooms[floor] || [];
                        const visibleRooms = rooms.filter(r => visibleNodes.has(`${floorId}-${r}`));
                        const roomAngleStep = Math.PI / (visibleRooms.length + 1);
                        
                        visibleRooms.forEach((room, roomIndex) => {
                            if(building != 'east') {
                            const roomId = `${floorId}-${room}`;
                            const roomAngle = floorAngle - Math.PI/6 + roomAngleStep * (roomIndex + 1);
                            const roomX = floorX + roomRadius * Math.cos(roomAngle);
                            const roomY = floorY + roomRadius * Math.sin(roomAngle);
                            
                            nodes.push({
                                id: roomId,
                                label: room,
                                x: roomX,
                                y: roomY,
                                fx: roomX,
                                fy: roomY
                            });
                            links.push({ source: floorId, target: roomId });
                        }
                        else{
                            const roomId = `${floorId}-${room}`;
                            const roomAngle = floorAngle - Math.PI/6 + roomAngleStep * (roomIndex + 1);
                            const roomX = floorX + roomRadius * Math.sin(roomAngle) + 60;
                            const roomY = floorY + roomRadius * Math.cos(roomAngle) + 30;
                            
                            nodes.push({
                                id: roomId,
                                label: room,
                                x: roomX,
                                y: roomY,
                                fx: roomX,
                                fy: roomY
                            });
                            links.push({ source: floorId, target: roomId });
                        }
                        });
                    }
                });
            }
        });
        
        return { nodes, links };
    };
    
    
    useEffect(() => {
        if (isGraphModalVisible) {
            const data = generateGraphData();
            setGraphData(data);
        }
    }, [isGraphModalVisible, visibleNodes]);
    return (
        <div className='page-container'>
            <div className='scoreCounter'>
                <div className='score'>
                    <h3 className='scoreCounter_text'>Round</h3>
                    <p className='scoreCounter_text'>{round}</p>
                </div>
                <div className='score'>
                    <h3 className='scoreCounter_text'>Score</h3>
                    <p className='scoreCounter_text'>{score}</p>
                </div>
                <div className='score'>
                    <h3 className='scoreCounter_text'>Time</h3>
                    <p className='scoreCounter_text'>{formatTime(elapsedTime)}</p>
                </div>
            </div>
            <ReactPannellum
                ref={pannellumRef}
                id="1"
                sceneId={`scene-${sceneId}`}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    overflow: "hidden",
                    position: "relative",
                }}
                imageSource={selectedImage}
                config={{
                    autoLoad: true,
                    sceneFadeDuration: 1000,
                    type: "equirectangular",
                    haov: 360,
                    vaov: 90,
                    hotSpots: hotSpots,
                    cssCustom: `
                        #panorama {
                            width: 100%;
                            height: 100%;
                        }

                        div.custom-hotspot {
                            height: 50px;
                            width: 50px;
                            background: rgba(87, 13, 248, 0.75);
                            border: 2px solid rgba(255, 255, 255, 0.8);
                            border-radius: 50%;
                            cursor: pointer;
                        }

                        div.custom-tooltip span {
                            visibility: hidden;
                            position: absolute;
                            border-radius: 6px;
                            background-color: #fff;
                            color: #000;
                            text-align: center;
                            max-width: 200px;
                            padding: 8px 15px;
                            margin-left: -220px;
                            margin-top: -50px;
                            cursor: default;
                            font-weight: 500;
                            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
                        }

                        div.custom-tooltip:hover span {
                            visibility: visible;
                        }

                        div.custom-tooltip:hover span:after {
                            content: '';
                            position: absolute;
                            width: 0;
                            height: 0;
                            border-width: 10px;
                            border-style: solid;
                            border-color: #fff transparent transparent transparent;
                            bottom: -20px;
                            left: -10px;
                            margin: 0 50%;
                        }
                    `
                }}
            />
            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <p style={{ color: 'white' }}>{modalMessage}</p>
                        <button onClick={hideModal} className="modal-close-button">Close</button>
                    </div>
                </div>
            )}

            <div className='bottom-right-container'>
                {/* <div className='dropdown-container'>
                    <div className='dropdowns'>
                        <select value={selectedBuilding} onChange={handleBuildingChange}>
                            <option value="" disabled>Select Building</option>
                            {buildings.map((building, index) => (
                                <option key={index} value={building}>{building}</option>
                            ))}
                        </select>

                        <select value={selectedFloor} onChange={handleFloorChange} disabled={!selectedBuilding}>
                            <option value="" disabled>Select Floor</option>
                            {floors.map((floor, index) => (
                                <option key={index} value={floor}>{floor}</option>
                            ))}
                        </select>

                        <select value={selectedRoom} onChange={handleRoomChange} disabled={!selectedFloor}>
                            <option value="" disabled>Select Room</option>
                            {rooms.map((room, index) => (
                                <option key={index} value={room}>{room}</option>
                            ))}
                        </select>
                    </div>
                </div> */}

                <div className='next-img-container'>
                    <button
                        className='getRandomImageButton'
                        onClick={fetchRandomImage}
                        aria-label="Load the next random image"
                    >
                        Next Image
                    </button>
                </div>
                <div className='next-img-container'>
                    <button
                        className='guess-img-container'
                        onClick={guessClick}
                        aria-label="Take a guess at the location?"
                    >
                        Guess?
                    </button>
                </div>
                <div>
                    <div>
                        <button onClick={toggleGraphModal} className="openGraphButton">
                            Open Building Map
                        </button>
                    </div>

                    {isGraphModalVisible && (
                        <div className="modal-overlay" onClick={closeModal} style={{}}>
                            <div className="modal-content" style={{
                                width: '80%',
                                maxHeight: '80%',
                                backgroundColor: '#333',
                                padding: '20px',
                                overflowY: 'auto',
                                position: 'relative',
                            }}>
                                <button onClick={toggleGraphModal} className="modal-close-button" style={{
                                    position: 'absolute', top: '10px', right: '10px', color: 'white', fontSize: '20px', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: '10001'
                                }}>
                                    &times;
                                </button>
                                {graphData && (
                                     <div className="graph-container">
                                     <Graph
                                         id="buildingGraph"
                                         data={graphData}
                                         config={graphConfig}
                                         onClickNode={handleNodeClick}
                                     />
                                 </div>
                                )}
                                {selectedRoom && (
                                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                        <p style={{ color: 'white' }}>Selected Room: {selectedRoom}</p>
                                        <button style={{
                                            backgroundColor: '#60269e', padding: '8px 12px',
                                            fontSize: '0.9rem', borderRadius: '5px',
                                            cursor: 'pointer',
                                            transition: 'background-color 0.3s',
                                            width: '9.5em'
                                        }} onClick={submitSelection}>Submit Selection</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Pano;
