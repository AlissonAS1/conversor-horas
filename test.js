const listaDados = '10:35:12'

function converteHoras(hora){
        const listaDados = hora.split(':')
        const horas = Number(listaDados[0])
        const minutos = Number(listaDados[1])
        const segundos = Number(listaDados[2])
        const reshora = horas * 3600
        const resmin = minutos * 60

        return (reshora + resmin + segundos)
        
    }
console.log(converteHoras(listaDados))
    

    
