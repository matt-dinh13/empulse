---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881763
diagrams: 10
connections: 15
tags:
  - requirement
  - modules
---

# 📋 {MOD}External validation cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

Input:
- commodit id
- salesroom code
{ADD PCG-5004}- partner scheme name{/ADD}
Output:
- validation cancelation result
- error message

Steps:
value = null
System finds Commodity by commodityId
If commodity.imei is filled then value = commodity.imei
  else if commodity.serialNumber is filled then value = commodity.serialNumber
If value is not null then system calls external system with request for validation cancelation based on commodity.manufacturer
- if commodity.manufacturer = XIAOMI then XIAOMI validation cancelation 
- if commodity.manufacturer = OPPO then OPPO validation cancelation 
- if commodity.manufacturer = SYMPHONY then SYMPHONY validation cancelation
- if commodity.manufacturer = PANASONIC then PANASONIC validation cancelation
- if commodity.manufacturer = SAMSUNG then SAMSUNG validation cancellation
- if commodity.manufacturer = VIVO then VIVO validation cancellation 
{ADD PCG-5519}
- if commodity.manufacturer = MOTOROLA then MOTOROLA validation cancellation {/ADD}
{ADD PCG-5649}
- if commodity.manufacturer = ALCATEL then ALCATEL validation cancellation {/ADD}
- if commodity.manufacturer = PHILIPS then PHILIPS loan status update with status = cancelled{/ADD}
- if commodity.manufacturer = AMSTRAD then {ADD} AMSTRAD validation cancellation {/ADD}
{ADD PCG-5811}


If error is return then fill in error message with result from external system. System fills in validation cancellation result = ERROR.
System fills in validation cancelation result = OK.


Note: for calling external systems the apache proxy external-services is used (https://external-services.in.infra/)
uat config: https://git.homecredit.net/deploy/proxies/configuration/-/blob/master/conf/in/uat/external-services.in.infra.yaml
prod config: https://git.homecredit.net/deploy/proxies/configuration/-/blob/master/conf/in/prod/external-services.pdcin1.in.prod.yaml

## 🔗 Connections (13)

- → Dependency: [[{ADD} VIVO validation cancellation]]
- → Dependency: [[OPPO validation cancellation]]
- → Dependency: [[{ADD}ALCATEL validation cancellation]]
- → Dependency: [[{MOD}Panasonic validation cancellation]]
- → Dependency: [[{ADD} AMSTRAD validation cancellation]]
- → Dependency: [[SYMPHONY validation cancellation]]
- → Dependency: [[{ADD} MOTOROLA validation cancellation]]
- → Dependency: [[{ADD} SAMSUNG validation cancellation]]
- ← Dependency: [[DELETE Commodity]]
- ← Dependency: [[PUT Commodity]]
- ← Dependency: [[Cancel external validation]]
- → Dependency: [[{ADD}PHILIPS loan status update]]
- → Dependency: [[XIAOMI validation cancellation]]

## 📊 Appears In (10 diagrams)

- Custom: Business Rules
- Custom: PCG-5108 -SAMSUNG - HA validation Integration - Hosel origination
- Custom: PCG-5308 - Vivo - IMEI unblocking API (CBL-28657)
- Custom: PCG-5519 CBL-29530 BRIN-807 - MOTOROLA - API Integration - ANA - HoSel-Origination - Commodity Management
- Custom: PCG-5617 BRIN-1016 - DISH TV - API Integration for Serial Number
- Custom: PCG-5649 BRIN-1163 - ALCATEL - API Integration
- Custom: PCG-5673 BRIN-1204 - Philips (Zenotel India) - API Integration
- Custom: PCG-5811 CBL-31890 BRIN-1261 - AMSTRAD - API Integration
- Use Case: Commodity cancelation
- Use Case: Use Case
