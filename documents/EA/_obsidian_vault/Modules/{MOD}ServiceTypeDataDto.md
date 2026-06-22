---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1460394
diagrams: 1
connections: 29
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceTypeDataDto

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

Switch for differentiation of service data specific for particular service type.
If the type is not mentioned in the switch then no specific data are generated.

## 🔗 Connections (29)

- → Dependency: [[ServiceRELFERDataDto]]
- → Dependency: [[{MOD}ServiceINSURANCEDataDto]]
- → Dependency: [[{MOD}ServiceIPPACKDataDto]]
- → Dependency: [[{MOD}ServiceCELREWDataDto]]
- → Dependency: [[ServiceRELPAYHOLDataDto]]
- → Dependency: [[{MOD}ServiceCOPDataDto]]
- → Dependency: [[{MOD}ServiceFERDataDto]]
- → Dependency: [[ServiceCRDPSTDataDto]]
- → Dependency: [[ServiceCHECKTLDataDto]]
- → Dependency: [[{MOD}ServiceCETDataDto]]
- → Dependency: [[ServiceCHDDDataDto]]
- → Dependency: [[ServiceLRESDataDto]]
- → Dependency: [[ServiceZPROMODataDto]]
- → Dependency: [[ServiceRELIPDataDto]]
- → Dependency: [[{ADD}ServiceACCSTMTData]]
- → Dependency: [[ServiceLOYALTYDataDto]]
- → Dependency: [[ServiceGRRELDataDto]]
- → Dependency: [[ServiceGIFTPDataDto]]
- → Dependency: [[ServiceDEFPDataDto]]
- → Dependency: [[ServiceCHDDRDataDto]]
- → Dependency: [[ServicePAYHOLDataDto]]
- → Dependency: [[{MOD}ServicePREFDDDataDto]]
- → Dependency: [[ServiceCONSDataDto]]
- → Dependency: [[ServiceGRPERDataDto]]
- → Dependency: [[ServiceFBACKDataDto]]
- → Dependency: [[{DEL}ServiceSMSNDataDto]]
- → Dependency: [[ServicePERDataDto]]
- → Dependency: [[{ADD}ServiceMTCACCData]]
- ← Association: [[ServiceCommonDataDto]]

## 📊 Appears In (1 diagrams)

- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}MTCACC | {ADD}ServiceMTCACCData |  |
| {ADD}ACCSTMT | {ADD}ServiceACCSTMTData  |  |
| RELPAYHOL | ServiceRELPAYHOLDataDto |  |
| BUNDLE1 |  |  |
| CELREW | {MOD}ServiceCELREWDataDto |  |
| CET | {MOD}ServiceCETDataDto |  |
| CONS | ServiceCONSDataDto |  |
| COP | {MOD}ServiceCOPDataDto |  |
| CRDPST | ServiceCRDPSTDataDto |  |
| DEFP | ServiceDEFPDataDto |  |
| FBACK | ServiceFBACKDataDto |  |
| FER | {MOD}ServiceFERDataDto |  |
| GIFTP | ServiceGIFTPDataDto |  |
| GRPER | ServiceGRPERDataDto |  |
| GRREL | ServiceGRRELDataDto |  |
| CHDD | ServiceCHDDDataDto |  |
| CHDDR | ServiceCHDDRDataDto |  |
| CHECKTL | ServiceCHECKTLDataDto |  |
| INSURANCE | {MOD}ServiceINSURANCEDataDto |  |
| IPPACK | {MOD}ServiceIPPACKDataDto |  |
| LOYALTY | ServiceRELIPDataDto |  |
| LRES | ServiceLRESDataDto |  |
| PAYHOL | ServicePAYHOLDataDto |  |
| PER | ServicePERDataDto |  |
| {MOD}PREFDD |  |  |
| RELFER | ServiceRELFERDataDto |  |
| RELIP | ServiceRELIPDataDto |  |
| SMSN | {DEL}ServiceSMSNDataDto |  |
| ZPROMO | ServiceZPROMODataDto |  |
| {ADD}PAS |  |  |
