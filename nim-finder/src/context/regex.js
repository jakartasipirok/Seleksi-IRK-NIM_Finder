import KODEJURUSAN from '../data/kode_jurusan.json';
import KODEFAKULTAS from '../data/kode_fakultas.json';

export function regexType(string){
    const regexNIM = new RegExp('^[0-9]{3,8}$')
    if (regexNIM.test(string)){
        return "NIM";
    }
    const regexNama = new RegExp('^[a-zA-Z ]*$');
    if (regexNama.test(string)){
        return "Nama";
    }
    const regexJurAng = new RegExp('^[a-zA-Z]+[0-9]{2}$');
    if (regexJurAng.test(string)){
        return "JurusanAngkatanNo";
    }  
    const regexJurAng2 = new RegExp('^[a-zA-Z ]+[0-9]{2}$');
    if (regexJurAng2.test(string)){
        return "JurusanAngkatanYes";
    }    
}

export function getQuery(query, value, hasilregex){
    if (query == ""){
        return value;
    }
    if (hasilregex == "NIM"){
        const regexNIM = new RegExp(query, 'i');
        if (regexNIM.test(value[1]) || regexNIM.test(value[2])){
            return value;
        }
    }
    if (hasilregex == "Nama"){
        if (value[0].toLowerCase().includes(query.toLowerCase())){
            return value;
        }
    }
    if (hasilregex == "JurusanAngkatanNo"){
        const jurusan = query.slice(0,-2);
        const angkatan = query.slice(-2);
        const kodeJur = KODEJURUSAN[jurusan];
        const newNIM = String(value[2]);
        const JurtoFind = newNIM.slice(0,3)
        const AngkatanToFind = newNIM.slice(3,5)
        console.log(JurtoFind, AngkatanToFind);
        console.log(kodeJur, angkatan);
        if (JurtoFind == kodeJur && AngkatanToFind == angkatan){
            return value;
        }
    }
    if (hasilregex == "JurusanAngkatanYes"){
        const jurusan = query.slice(0,-3);
        const angkatan = query.slice(-2);
        const kodeJur = KODEJURUSAN[jurusan];
        const newNIM = String(value[2]);
        const JurtoFind = newNIM.slice(0,3)
        const AngkatanToFind = newNIM.slice(3,5)
        console.log(JurtoFind, AngkatanToFind);
        console.log(kodeJur, angkatan);
        if (JurtoFind == kodeJur && AngkatanToFind == angkatan){
            return value;
        }
    }
}