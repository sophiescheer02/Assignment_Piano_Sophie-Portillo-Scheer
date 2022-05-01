
export function shownote(ton: string){
  let ton_final;
  const test = document.getElementById('note');
  const test2 = test as HTMLElement;
  
  if (ton.charAt(1) == "-"){

    ton_final = ton.charAt(0).toUpperCase() + ton.charAt(2) +"#";

  } else {

    ton_final = ton.toUpperCase();

  }
  test2.innerHTML = ton_final as string;
}
