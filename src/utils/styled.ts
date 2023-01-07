export const properties: any = {
  padding: 'padding',
  margin: 'margin',
  color: "color",
  background: "background",
  position: 'position',

  alignItems: 'align-items',
  justifyContent: 'justify-content',

  gap: 'gap',
  columns: 'grid-template-columns',
  rows: 'grid-template-rows',
  alignContent: 'align-content',
  justifyItems: 'justify-items',
}

export const addStyles =(props: any)=> {
  return Object.keys(props).map((key)=>{
    const keys =  { prop: properties[key], value: props[key] };
    if(keys.prop){
      return `${keys.prop}: ${keys.value};`
    }else{
      return ""
    }
  }).join("\n")
}
