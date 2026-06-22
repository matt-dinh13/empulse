---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821427
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}EmploymentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Object containing the employment data of some particular person.

## 🔗 Connections (3)

- → Dependency «use»: [[AddressType (Class 1878263)]]
- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]
- → Dependency «use»: [[EmploymentContactType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}company | string |  |
| {MOD}economicalStatus | string |  |
| {MOD}type | string |  |
| {MOD}profession | string |  |
| {MOD}industry | string |  |
| {MOD}employedFrom | int |  |
| {MOD}employedFromDate | date |  |
| {MOD}department | string |  |
| {MOD}salaryDay | int |  |
| {MOD}salaryPayment | string |  |
| {MOD}course | string |  |
| {MOD}phone | string |  |
| {MOD}phoneExt | string |  |
| {MOD}workExperience | int |  |
| {MOD}salaryFrequency | string |  |
| {MOD}workPhoneOwnership | string |  |
| {MOD}identification | string |  |
| {MOD}employmentAddress | AddressType |  |
| {MOD}employmentContacts | EmploymentContactType |  |
