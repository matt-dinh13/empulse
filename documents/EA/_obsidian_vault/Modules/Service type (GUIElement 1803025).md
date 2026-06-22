---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface"
domain: "Modules"
element_id: 1803025
diagrams: 1
connections: 5
tags:
  - guielement
  - modules
---

# 🖥️ Service type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface

## 📝 Notes

For Assign service: 

	
- Listed : active ServiceType.name where ServiceType.ServiceCategory <> Insurance

For Assign insurance: 

	
- Listed : active ServiceType.name where ServiceType.ServiceCategory = Insurance


Common:

	
- LDM: ProductToServiceType.ServiceType
	
- Enabled: only for creating of service assignment.


	
- List of allowed service types is limited by the rule Check compatibility of service type to product properties.


(SERVICE_TYPE_NOT_SET)

## 🔗 Connections (5)

- → Dependency: [[Service Type (Class 1880808)]]
- → Dependency: [[{MOD}Check compatibility of service type to product properties]]
- → Dependency: [[Only active item can be related]]
- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[{MOD}Check compatibility of service type to product properties]]

## 📊 Appears In (1 diagrams)

- Custom: Service or Insurance-Assign
