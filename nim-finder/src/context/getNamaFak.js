import JURUSAN from '../data/list_jurusan.json';
import FAKULTAS from '../data/list_fakultas.json';

export function getNamaJur(NIM){
  let newNIM = String(NIM);
  let kode_jurusan = newNIM.substring(0,3);
  if (JURUSAN.hasOwnProperty(kode_jurusan)){
  return JURUSAN[kode_jurusan];
  }
}

export function getNamaFak(NIM){
  let newNIM = String(NIM);
  let kode_fakultas = newNIM.substring(0,3);
  if (FAKULTAS.hasOwnProperty(kode_fakultas)){
    return FAKULTAS[kode_fakultas];
  }
}