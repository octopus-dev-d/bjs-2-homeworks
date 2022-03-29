const addThree = (a, b, c) => (a + b + c); 
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); 
upgradedAddThree(1, 2, 3); 
upgradedAddThree(2, 2, 3); 
upgradedAddThree(3, 2, 3); 
upgradedAddThree(4, 2, 3); 
upgradedAddThree(5, 2, 3); 
upgradedAddThree(6, 2, 3); 
upgradedAddThree(1, 2, 3);
upgradedAddThree(6, 2, 5); 

const sendSignal = (id) => console.log(id);
const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);
setTimeout(() => {upgradedSendSignal(1)}); // Сигнал отправлен
setTimeout(() => {upgradedSendSignal(2)}, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(() => {upgradedSendSignal(3)}, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(() => {upgradedSendSignal(4)}, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(() => {upgradedSendSignal(5)}, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(() => {upgradedSendSignal(6)}, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(() => {upgradedSendSignal(7)}, 4500);
setTimeout(() => {upgradedSendSignal(8)}, 4700);

setTimeout(() => console.log(upgradedSendSignal.count), 7000)