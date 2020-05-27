import { Data } from '../store/metadata'

export const Questions = [
    {
        name: "Has_cacao_joven",
        type:"number",
        options:[],
        string: "Hectáreas de Cacao Joven",
    },{
        name: "Has_cacao_envejecido",
        type:"number",
        options:[],
        string:"Hectáreas de Cacao Envejecido",
    },{
        name: "nombre_tecnico",
        type:"string",
        options:[],
        string:"Nombre del técnico receptor de la información:",
    },{
        name: "lleva_registro_produccion",
        type:"selection",
        options: Data.binary,
        string:"¿Lleva un registro de su producción?",
    },{
        name: "produccion_qq_anio_CNac",
        type: "number",
        options:[],
        string:"Producción de quintales de Cacao por año",
    },{
        name: "produccion_qq_anio_CCN",
        type:"number",
        options:[],
        string:"Producción de quintales de Cacao CCN-51 por año",
    },{
        name: "origen_plantas",
        type: "selection",
        options: Data.origin_plants,
        string:"Origen de las plantas de Cacao",
    },{
        name: "origen_mixto",
        type: "string",
        options:[],
        string:"Origen Mixto de las plantas",
    },{
        name: "fert_Nat",
        type: "selection",
        options: Data.binary,
        string:"¿Utiliza fertilizante NATURAL en este lote?",
    },{
        name: "nombre_fertNat",
        type:"string",
        options:[],
        string:"Nombre del Fertilizante NATURAL",
    },{
        name: "fert_Qui",
        type:"selection",
        options:Data.binary,
        string:"¿Utiliza fertilizante QUIMICO en este lote?",
    },{
        name: "nombre_fertQui",
        type:"string",
        options:[],
        string:"Nombre del Fertilizante QUIMICO",
    },{
        name: "fert_Mix",
        type:"selection",
        options:Data.binary,
        string:"¿Utiliza fertilizantes MIXTOS (natural + químico)  en este lote?",
    },{
        name: "nombre_fertMix",
        type:"string",
        options:[],
        string:"Nombre de los Fertilizantes MIXTOS",
    },{
        name: "forma_riego",
        type:"selection",
        options:Data.freq_rainly,
        string:"¿Con qué tipo de riego cuenta en sus cultivos de cacao?",
    },{
        name: "monilla",
        type:"selection",
        options:Data.binary,
        string:"¿Tuvo presencia de Monilla en este lote en algún momento de la producción?",
    },{
        name: "tratamiento_monilla",
        type:"string",
        options:[],
        string:"Tratamiento para la Monilla",
    },{
        name: "insec_Nat",
        type: "selection",
        options: Data.binary,
        string:"¿Utiliza insecticida NATURAL en este lote?",
    },{
        name: "nombre_insecNat",
        type:"string",
        options:[],
        string:"Nombre del Insecticida NATURAL",
    },{
        name: "insec_Qui",
        type: "selection",
        options: Data.binary,
        string:"¿Utiliza insecticida QUIMICO en este lote?",
    },{
        name: "nombre_insecQui",
        type:"string",
        options:[],
        string:"Nombre del Insecticida QUIMICO",
    },{
        name: "insec_Mix",
        type:"selection",
        options:Data.binary,
        string:"¿Utiliza insecticidas MIXTOS (natural + químico) en este lote?",
    },{
        name: "nombre_insecMix",
        type:"string",
        options:[],
        string:"Nombre de los Insecticidas MIXTOS",
    },{
        name: "herb_Nat",
        type:"selection",
        options: Data.binary,
        string:"¿Utiliza herbicida NATURAL en este lote?",
    },{
        name: "nombre_herbNat",
        type:"string",
        options:[],
        string:"Nombre del Herbicida NATURAL",
    },{
        name: "herb_Qui",
        type:"selection",
        options:Data.binary,
        string:"¿Utiliza herbicida QUIMICO en este lote?",
    },{
        name: "nombre_herbQui",
        type:"string",
        options:[],
        string:"Nombre del Herbicida QUIMICO",
    },{
        name: "herb_Mix",
        type: "selection",
        options:Data.binary,
        string:"¿Utiliza herbicidas MIXTOS (químico + natural) en este lote?",
    },{
        name: "nombre_herbMix",
        type:"string",
        options:[],
        string:"Nombre de los Herbicidas MIXTOS",
    },{
        name: "fung_Nat",
        type:"selection",
        options: Data.binary,
        string:"¿Utiliza fungicida NATURAL en este lote?",
    },{
        name: "nombre_fungNat",
        type:"string",
        options:[],
        string:"Nombre de Fungicida NATURAL",
    },{
        name: "fung_Qui",
        type:"selection",
        options: Data.binary,
        string:"¿Utiliza fungicida QUIMICO en este lote?",
    },{
        name: "nombre_fungQui",
        type:"string",
        options:[],
        string:"Nombre del Fungicida QUIMICO",
    },{
        name: "fung_Mix",
        type: "selection",
        options: Data.binary,
        string:"¿Utiliza fungicidas MIXTOS (químico + natural) en este lote?",
    },{
        name: "nombre_fungMix",
        type:"string",
        options:[],
        string:"Nombre de los Fungicidas MIXTOS",
    },{
        name: "certificacion",
        type:"selection",
        options:Data.binary,
        string:"¿Posee alguna certificación?",
    },{
        name: "certificaciones_especifique",
        type:"string",
        options:[],
        string:"Certificaciones ",
    },{
        name: "a_quien_vende",
        type:"selection",
        options:Data.customers,
        string:"¿A quién vende su cacao?",
    },{
        name: "nombre_establec",
        type:"string",
        options:[],
        string:"Nombre del Establecimiento:",
    },{
        name: "lugar_entrega",
        type:"selection",
        options:Data.sale_place,
        string:"En donde se realiza la compra del cacao:",
    },{
        name: "transporte_cAcopio",
        type:"selection",
        options:Data.transport,
        string:"Transporte hacia Centro de Acopio, Exportadora o Intermediario",
    },{
        name: "fermentacio_caja",
        type: "selection",
        options: Data.binary,
        string:"¿Utilizó CAJONES de fermentación en este lote?",
    },{
        name: "time_fermCajas",
        type:"number",
        options:[],
        string:"Tiempo de Fermentación en CAJONES",
    },{
        name: "fermentacion_sacos",
        type:"selection",
        options:Data.binary,
        string:"¿Utilizó SACOS para fermentación en este lote?",
    },{
        name: "time_fermSacos",
        type:"number",
        options:[],
        string:"Tiempo en dias de Fermentación en SACOS",
    },{
        name: "fermentacion_Natural",
        type:"selection",
        options: Data.binary,
        string:"¿Fermentó el cacao NATURALMENTE (al sol) en este lote?",
    },{
        name: "time_fermNat",
        type:"number",
        options:[],
        string:"Tiempo en dias de Fermentación NATURAL (al sol)",
    },{
        name: "fermentacion_Especial",
        type:"selection",
        options: Data.binary,
        string:"¿Utiliza algún método ESPECIAL de fermentación en este lote?",
    },{
        name: "fermEspe",
        type:"number",
        options:[],
        string:"Dias de Fermentación ESPECIAL",
    },{
        name: "fermentado_mixto",
        type:"string",
        options:[],
        string:"Si utilizó varios métodos en el mismo cacao, explique el tipo de cacao, método y el tiempo de fermentación en días:",
    },{
        name: "secado_Nat",
        type:"selection",
        options: Data.binary,
        string:"¿Seca su cacao NATURALMENTE (al sol)  en este lote?",
    },{
        name: "time_secoNat",
        type:"number",
        options:[],
        string:"Dias de Secado NATURAL",
    },{
        name: "secado_Gas",
        type:"selection",
        options:Data.binary,
        string:"¿Utilizó SECADORA A GAS en este lote?",
    },{
        name: "time_secoGas",
        type:"number",
        options:[],
        string:"Dias en Secadora a GAS",
    },{
        name: "secado_bandeja",
        type:"selection",
        options: Data.binary,
        string:"¿Utilizó BANDEJAS DE SECADO en este lote?",
    },{
        name: "time_secoBandeja",
        type:"number",
        options:[],
        string:"Dias de Secado en BANDEJA",
    },{
        name: "secado_Marq",
        type: "selection",
        options: Data.binary,
        string:"¿Utilizó MARQUESINA para el secado en este lote?",
    },{
        name: "time_secoMarq",
        type:"number",
        options:[],
        string:"Dias de Secado en MARQUESINA",
    },{
        name: "secado_mixto",
        type:"string",
        options:[],
        string:"Si utilizó varios métodos de secado, explique el tipo de cacao, método y el tiempo de secado en días:",
    },{
        name: "vol_Nac_baba_finca",
        type:"number",
        options:[],
        string:"Volumen en quintales de Cacao Nacional en Baba",
    },{
        name: "vol_Nac_seco_finca",
        type:"number",
        options:[],
        string:"Volumen en quintales de Cacao Nacional Seco",
    },{
        name: "vol_CCN_baba_finca",
        type:"number",
        options:[],
        string:"Volumen en quintales de Cacao CCN51 en Baba",
    },{
        name: "vol_CCN_seco_finca",
        type:"number",
        options:[],
        string:"Volumen en quintales de Cacao CCN51 Seco",
    },{
        name: "vol_Trinit_baba",
        type:"number",
        options:[],
        string:"Volumen en quintales de Cacao Trinitario en Baba",
    },{
        name: "vol_Trinit_seco",
        type:"number",
        options:[],
        string:"Volumen en quintales de Cacao Trinitario Seco",
    },{
        name: "vol_Hibrido_baba_finca",
        type:"number",
        options:[],
        string:"Volumen en quintales de Cacao Híbrido en Baba",
    },{
        name: "vol_Hibrido_seco_finca",
        type:"number",
        options:[],
        string:"Volumen en quintales de Cacao Híbrido Seco",
    },{
        name: "vol_Mixto_baba_finca",
        type:"number",
        options:[],
        string:"Volumen en quintales de Cacao Mezclado (CCN51 + Nacional)",
    },{
        name: "vol_Mixto_seco_finca",
        type: "number",
        options:[],
        string:"Volumen en quintales de Cacao Mezclado (CCN51 + Nacional)",
    },{
        name: "fecha_inicio_cosecha",
        type:"date",
        options:[],
        string:"Fecha de inicio de la cosecha",
    },{
        name: "fecha_despacho",
        type:"date",
        options:[],
        string:"Fecha de Despacho",
    },{
        name: "hectareas_CNac",
        type:"number",
        options:[],
        string:"Total de Hectáreas de Cacao Nacional",
    },{
        name: "hectareas_CCN",
        type:"number",
        options:[],
        string:"Total de Hectáreas de Cacao CCN-51",
    },{
        name: "tipo_cacao",
        type:"selection",
        options: Data.tipo_cacao,
        string:"Tipo de Cacao en este Lote",
    },{
        name: "separa_cacaos",
        type: "selection",
        options: Data.binary,
        string:"¿Separa el Cacao Nacional del CCN-51 eventualmente?",
    },{
        name: "fotografia1",
        type:"image",
        options:[],
        string:"Fotografía 1",
    },{
        name: "fotografia2",
        type:"image",
        options:[],
        string:"Fotografía 2",
    },{
        name: "fotografia3",
        type:"image",
        options:[],
        string:"Fotografía 3",
    },{
        name: "foto1_prod",
        type: "image",
        options:[],
        string:"Fotografía del Productor",
    },{
        name: "GPS_finca",
        type:"geo",
        options:[],
        string:"Ingrese su geolocalización (ubicación)",
    }    
]