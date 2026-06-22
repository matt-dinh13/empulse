---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-377 - Insurance Contract separation - init ANA"
domain: "Modules"
element_id: 1671451
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Requirements for Insurance Contract core component

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-377 - Insurance Contract separation - init ANA

## 📝 Notes

The intended component will contains the InsuranceContract domain (data) including its persistence and it will ensure basic services for creation, updating, getting of object covered by this domain (e.g. InsuranceContract, InsurancePeriod, Object status logs,...)
Data model: It will be used the current Insurance Contract domain model as a basis, but there has to be some changes done, which resulted from the current usage and needs.

Open questions:

	
- information about related subjects of insurance (loan contract, commodity, client, transaction) - should it be here or should a business object (loan contract, customer) keep reference to the InsuranceContract
	
- Consider to have the InsuranceContract domain as general domain (component) for third party services (i.e. not only insurance) 


Keep principles for exposed services of this component

	
- Reusability
již na začátku plánovat přepoužití služby v budoucnosti
nutný dobrý architektonický návrh systému
	
- Autonomy
nezávislá logika a data, se kterými služba pracuje
veškerá data potřebná ke zpracování musí služba dostat na vstupu


	
- Statelessness
jednotlivá volání služeb jsou na sobě nezávislá
umožňuje paralelní přístup a přepoužití služby


	
- Standardized contract
jasná definice kontraktu (business i IT pohled), služba je definována a popsána standardizovanými způsoby
slib dané služby svému okolí, co bude poskytovat
verzování služeb


	
- Loose coupling
slabé vazby mezi komponentami
závislosti řízeny mimo službu (v business procesech)


	
- Service abstraction
maximální skrytí implementačních detailů služby
jednoduchá správa a případné změny služby
doplňuje princip slabé vazby

## 🔗 Connections (1)

- → Generalization: [[Requirement for Insurance in HoSel system]]

## 📊 Appears In (1 diagrams)

- Custom: Requirements for Insurance Contract separation
