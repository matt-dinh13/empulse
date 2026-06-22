---
type: Component
stereotype: ""
package: "HomerSelect/BSL/Architecture Model/Component list"
domain: "Architecture Model"
element_id: 1847541
diagrams: 4
connections: 1
tags:
  - component
  - architecture-model
---

# 📦 CIF

> **Type**: Component
> **Package**: HomerSelect/BSL/Architecture Model/Component list

## 📝 Notes

Web service interface
Sada webových služeb poskytovaných systémem CIF. 

Cíl: 
Pro všechny implementace bude k dispozici stejná sada WS a metod.

Otevřené otázky: 
1. Řada služeb používá jako vstup/výstup objekt customer, v každé implementaci se však liší sada používaných atributů customera. Nabízejí se tyto možné přístupy:
	a) WS budou používat plný objekt customera - bude to sice univerzální, ale poměrně matoucí s ohledem na atributy, které se v dílčí implementaci nepoužívají
	b) pro každou implementaci bude v xsd specifická definice customera - povede k větší pracnosti, budeme muset udržovat xsd/wsdl pro každou implementaci
	c) wsdl upravíme tak, aby explicitně obsahoval pouze "core" atributy všude užívané, ostatní atributy nebudou explicitně pojmenované,a bude se s nimi pracovat jako s key/value hodnotami - budeme mít jedno wsdl/xsd, pro externí systémy bude komplikovanější vydefinovat response/request

## 🔗 Connections (1)

- ← Usage: [[Client center (Component 1847614)]]

## 📊 Appears In (4 diagrams)

- Component: Component list
- Component: Component model
- Component: Contract signature component integration
- Component: NOT UPDATED BSL splitting proposal - Component model
