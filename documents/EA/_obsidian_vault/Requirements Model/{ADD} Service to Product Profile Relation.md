---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5343 Display vas add on offers based on specific product type (CBL-29025)"
domain: "Requirements Model"
element_id: 1864970
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 {ADD} Service to Product Profile Relation

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5343 Display vas add on offers based on specific product type (CBL-29025)

## 📝 Notes

{ADD PCG-5343/}
For country: ID

The table defines list of connections between PRC Service and PRC Product profile. Possible to set up selected Service(s) as defaut service for all Product profiles.
 

	
- ServiceCode - Service.Code (no matter the version, as only one version is active at one time)


	
- ProductProfileCode- ProductProfile.Sode

## 🔗 Connections (2)

- → Dependency: [[Service (Class 1880804)]]
- → Dependency: [[Product Profile (Class 1879121)]]

## 📊 Appears In (2 diagrams)

- Custom: PCG-5343 Display vas add on offers based on specific product type (CBL-29025)
- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceCode | string |  |
| productProfileCode | string |  |
