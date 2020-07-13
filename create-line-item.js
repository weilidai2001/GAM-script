// create Line Item https://admanager.google.com/5144#delivery/line_item/create/order_id=2644744277

const geoLocation = 'leicester';
const lineItemName = 'Weili Test 7';

// Click proceed
document.querySelector('body > div:nth-child(3) > root > div > div > div > div > child-container-dart > div > trafficking > line-item-create-page > form > div > div:nth-child(2) > inventory-type-splash > div > div > div:nth-child(1) > div.mdc-card__actions._ngcontent-TRAFFICKING-9 > div > material-button > material-ripple').click()
await new Promise(resolve => setTimeout(resolve, 500));

// Enter name
(function () {
    const nameFieldSelector = 'body > div:nth-child(3) > root > div > div > div > div > child-container-dart > div > trafficking > line-item-create-page > form > div > div.content._ngcontent-TRAFFICKING-0 > line-item-edit > drx-form-section:nth-child(2) > div > div.form-section-content._ngcontent-TRAFFICKING-15 > drx-form-field > div > material-input > div.baseline._ngcontent-TRAFFICKING-17 > div.top-section._ngcontent-TRAFFICKING-17 > div > div:nth-child(2) > textarea';
    document.querySelector(nameFieldSelector).value = lineItemName;
    document.querySelector(nameFieldSelector).dispatchEvent(new Event('input'));
}());

// // Line item type - Sponsorship
// document.querySelectorAll('[ngcontrolgroup="typePriority"] .glyph-i._ngcontent-TRAFFICKING-55.material-icons-extended')[0].click();
// await new Promise(resolve => setTimeout(resolve, 500));
// document.querySelector('.options-list._ngcontent-TRAFFICKING-52._nghost-TRAFFICKING-58 material-select-dropdown-item:nth-child(1)').click();

// Expected creatives
document.querySelector('[ngcontrolgroup="creativePlaceholders"] input').value = '970x250 (c'
document.querySelector('[ngcontrolgroup="creativePlaceholders"] input').dispatchEvent(new Event('input'));
await new Promise(resolve => setTimeout(resolve, 1500));
Array.from(document.querySelectorAll('.text-segment')).find(_ => _.textContent.includes('970x250 (Custom)')).click();

// startTime
document.querySelector('[ngcontrolgroup="startDateTime"] input').dispatchEvent(new Event('focus'));
await new Promise(resolve => setTimeout(resolve, 500));
document.querySelectorAll('[data-date="2020-8-1"].day-slot')[0].click();

// endTime
document.querySelector('[ngcontrolgroup="endDateTime"] input').dispatchEvent(new Event('focus'));
await new Promise(resolve => setTimeout(resolve, 500));
document.querySelectorAll('[data-date="2020-8-31"].day-slot')[1].click();

// units
document.querySelector('[ngcontrol="units"] input').value = '16000';
document.querySelector('[ngcontrol="units"] input').dispatchEvent(new Event('input'));
document.querySelector('[ngcontrol="units"] input').dispatchEvent(new Event('blur'));

// cost
document.querySelector('[ngcontrol="costPerUnit"] input').value = '14.45';
document.querySelector('[ngcontrol="costPerUnit"] input').dispatchEvent(new Event('input'));
document.querySelector('[ngcontrol="costPerUnit"] input').dispatchEvent(new Event('blur'));

// frequency cap
document.querySelector('frequency-cap-picker material-ripple').click();
await new Promise(resolve => setTimeout(resolve, 500));

document.querySelectorAll('frequency-cap-detail input')[0].value = '3';
document.querySelectorAll('frequency-cap-detail input')[0].dispatchEvent(new Event('input'));

// inventory
document.querySelector('[ngcontrol="inventoryTargeting"] .summary-cart').click();
await new Promise(resolve => setTimeout(resolve, 500));
document.querySelector('material-picker-lobby-section span').click();
await new Promise(resolve => setTimeout(resolve, 1500));
// desktop
Array.from(document.querySelectorAll('inventory-picker-item')).find(_ => _.innerHTML.includes('>desktop<')).querySelector('.zippy material-ripple').click();
await new Promise(resolve => setTimeout(resolve, 2500));
// srp
Array.from(document.querySelectorAll('inventory-picker-item children inventory-picker-item')).find(_ => _.innerHTML.includes('>srp<')).querySelector('children .zippy material-ripple').click();
await new Promise(resolve => setTimeout(resolve, 1500));
// top
Array.from(document.querySelectorAll('children children inventory-picker-item')).find(_ => _.innerHTML.includes('>top<')).querySelector('.zippy material-ripple').click();
await new Promise(resolve => setTimeout(resolve, 1500));
// cars-vans-motorbikes
Array.from(document.querySelectorAll('children children children inventory-picker-item')).find(_ => _.innerText.includes('cars-vans-motorbikes')).querySelector('material-button.include-icon').click()

// custom targeting
Array.from(document.querySelectorAll('custom-targeting-dimension material-expansionpanel')).find(_ => _.innerHTML.includes('Custom targeting')).querySelector('material-icon').click();
await new Promise(resolve => setTimeout(resolve, 500));
Array.from(document.querySelectorAll('material-button')).find(_ => _.innerHTML.includes('>Create<')).click();
await new Promise(resolve => setTimeout(resolve, 500));
Array.from(document.querySelectorAll('custom-targeting-dimension material-expansionpanel span')).find(_ => _.innerHTML.includes('Select...')).click();
await new Promise(resolve => setTimeout(resolve, 500));
document.querySelector('.popup-wrapper input').value = 'Region';
document.querySelector('.popup-wrapper input').dispatchEvent(new Event('input'));
await new Promise(resolve => setTimeout(resolve, 500));

Array.from(document.querySelectorAll('.popup-wrapper span')).find(_ => _.innerHTML.includes('Local Use - Region (region)')).click();
await new Promise(resolve => setTimeout(resolve, 500));
document.querySelector('custom-value-picker input').value = geoLocation;
document.querySelector('custom-value-picker input').dispatchEvent(new Event('input'));
await new Promise(resolve => setTimeout(resolve, 1500));
Array.from(document.querySelectorAll('.suggestion-list span')).find(_ => _.innerText === (geoLocation)).click();