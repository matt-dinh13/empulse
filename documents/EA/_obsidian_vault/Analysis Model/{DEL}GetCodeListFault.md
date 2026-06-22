---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList"
domain: "Analysis Model"
element_id: 1816571
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}GetCodeListFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList

## 📝 Notes

{DEL LOR-8678/}

This data type defines output of the method CustomerOfferWS.GetCodeList in case of fault.

## 🔗 Connections (2)

- → Dependency: [[{DEL}GetCodeListResultCode]]
- ← Dependency: [[{DEL}CustomerOfferWS]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetCodeList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | {DEL}GetCodeListResultCode |  |
