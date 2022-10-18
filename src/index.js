import { companiesData } from "./companies-data";
import {extraRecord} from "./extra-record";

const before = document.getElementById("before");

const filterFunction=function(element){return element.fieldData.State==="CA"};

const mapFunction=function(e){
    return {
        company:e.fieldData.CompanyName,
    state:e.fieldData.State,
city:e.fieldData.City,
cityState:`${e.fieldData.City}, ${e.fieldData.State}`,

}};

const manipulatedData = companiesData.filter(filterFunction).map(mapFunction);
//TODO: add the manipulated data array to the 'after' div.


const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
before.innerHTML = JSON.stringify(companiesData, null, 2);