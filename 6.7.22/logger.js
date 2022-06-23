export const TYPE_LOG ="log";
export const TYPE_ERROR = "error";
export const TYPE_WARN = "warn";

const logger = (massage, type = TYPE_LOG)=>{
    console[type](massage);
}

// function logger(massage)
// console.log(massage);