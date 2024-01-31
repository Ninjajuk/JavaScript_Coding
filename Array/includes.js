function getNames() {
    const namearr = ['SAMSU', 'ANSARI', 'AJUK', 'GIDA','AJUK'];
    const namesIncluded = namearr.filter(name => name.includes('AJUK'));

    return namesIncluded.length > 0 ? namesIncluded : null;
}

const result = getNames();
console.log(result);
