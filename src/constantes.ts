const Constantes = {
    EVENTOS:{
        VIDAS: 'cambiaVidas',
        PUNTUACION: 'cambiaPuntuacion',
        RELOJ: 'reloj',
        RECOLECTAR: 'recolectar'
    },
    MENU:{
        JUGAR: 'JUGAR',
        TITULO: '   GRIPAU RAMBO \n\n- COGELOS A TODOS -',
        AJUSTES: 'AJUSTES',
        CREDITOS: 'CREDITOS'
    },
    HUD:{
        VIDAS: 'VIDAS:',
        CESTA: 'cesta'
    },    
    ESCENAS:{
        CARGA: 'Carga',
        MENU: 'Menu',
        NIVEL1: 'NIVEL 1',
        NIVEL2: 'NIVEL 2',
        NIVEL3: 'NIVEL 3',
        HUD: 'HUD',
        AJUSTES: 'Ajustes',
        CREDITOS: 'Creditos',
        SELECCIONNIVEL: 'SeleccionNivel',
        FINNIVEL: 'FinNivel'
        
    },
    REGISTRO:{
        VIDAS: 'vidas',
        PUNTUACION: 'puntuacion',
        RELOJ: 'reloj',
        MUSICA: 'musica',
        EFECTOS: 'efectos',
        OBJETOSRECOLECTAR: 'numobjetosrecolectar'
    }, 
    MAPAS: {
        NIVEL1:{
            TILEMAPJSON: 'mapaNivel1'            
        },
        NIVEL2:{
            TILEMAPJSON: 'mapaNivel2'
        },
        NIVEL3:{
            TILEMAPJSON: 'mapaNivel3'
        },
        CAPAPLATAFORMAS: 'Plataformas',
        TILESET:'nivelestileset',
        POSICIONFINAL: 'posicionfinal',
        ENEMIGOS: 'enemigos',
        PLATAFORMASMOVILES: 'plataformasmoviles',
        PLATAFORMAVERTICAL: 'vertical',
        PLATAFORMAHORIZONTAL: 'horizontal',
        RECOLECTABLES: 'recolectables'
    },
    FONDOS:{
        NIVEL1: 'Brown',
        NIVEL2: 'Pink',
        NIVEL3: 'Blue',
        MENU: 'Green'
    }, 
    FUENTES:{
        JSON: 'fuenteJSON',
        IMAGEN: 'imagenFuente',
        BITMAP: 'fuentePixel'

    },
    JUGADOR:{
        ID: 'jugador',
        ANIMACION:{
            ESPERA: 'idle',
            CORRER: 'run',
            SALTO: 'jump-0'
        }
    }, 
    OBJETOS:{
        FINAL: 'final'
    },
    ENEMIGOS:{
        BUNNY:{
            ID:'bunny',
            ANIM:'bunnyCorre',
            VELOCIDAD: 70            
        },
        CHICKEN:{
            ID:'chicken',
            ANIM:'chickenCorre',
            VELOCIDAD: 70
        },
        MUSHROOM:{
            ID:'mushroom',
            ANIM:'mushroomCorre',
            VELOCIDAD: 70
        },
        RADISH:{
            ID:'radish',
            ANIM:'radishCorre',
            VELOCIDAD: 70
        },
        EXPLOSION:{
            ID:'explosion',
            ANIM:'explota'
        }           
    } ,
    PLATAFORMAMOVIL:{
        NIVEL1:{
            ID:'plataformamovil',
            VELOCIDAD: 100
        }, 
        NIVEL2:{
            ID:'plataformamovil2',
            VELOCIDAD: 100
        },
        NIVEL3:{
            ID:'plataformamovil3',
            VELOCIDAD: 200 
        }
        
    },  
    SONIDOS:{
        EFECTOS:{
            SALTAR:'saltar',
            CAERSOBREENEMIGO: 'caersobre',
            QUITARVIDA:'vida',
            RECOLECTAR: 'recolectar'
        },
        BANDASONORA:'bandasonora'
    },
    RECOLECTABLES:{
        PLATANO:{
            ID:'platano',
            ANIM:'platanoAnim'            
        },
        PINA:{
            ID:'pina',
            ANIM:'pinaAnim'            
        },
        CEREZA:{
            ID:'cereza',
            ANIM:'cerezaAnim'            
        },
    },
    AJUSTES: {
        VOLVER: 'VOLVER',
        MUSICA: 'MUSICA',
        EFECTOS: 'EFECTOS',
        SONIDOON: 'sonidoon',
        SONIDOOFF: 'sonidoff'
    },
    CREDITOS: {
        GAMEDEV: 'GOLDENWE - PAU DE LA CRUZ',
        CREADOPOR: 'GAMEDEV : GOLDENWE - PAU DE LA CRUZ \n\n WITH PHASER 3.50 AND TYPESCRIPT',
        ASSETS: 'SPRITES : PIXEL ADVENTURE BY PIXELFROG \n\n\n MUSIC : FREESOUND CARTOON THEMES LOOP \n\n BY DANIEL NORONHA', 
        VOLVER: 'VOLVER'
    }, 
    FINNIVEL: {
        PUNTOS: 'PUNTUACION : ',
        WIN: 'YOU WIN!!',
        GAMEOVER: 'GAME OVER!!',
        BESTSCORE: 'NUEVO MEJOR RESULTADO!!'
    },
    BASEDATOS: {
        NOMBRE: 'SUPERRANINJAv10'
    },    


};
export default Constantes;