// Converter time em horas e minutos! 

export const calcTime = time => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours >= 2 ? `${hours} horas` : `${hours} hora`} e ${mins} minutos`
}

// Converter os números em money!

export const convertMoney = budget => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return formatter.format(budget)
}

// Converter data para o padrão BR!

export const convertData = date => {
    const ResData = date;

    return (ResData ? `${ResData.split('-').reverse().join('/')}` : "Nenhuma data prevista.")
}