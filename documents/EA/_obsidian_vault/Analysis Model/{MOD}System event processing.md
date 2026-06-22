---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Business rules"
domain: "Analysis Model"
element_id: 1869886
diagrams: 2
connections: 14
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}System event processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Business rules

## 📝 Notes

Overview: 
This business rule describes processing of system events (e.g. change salesroom status, payment generation etc.) which are generated from BSL use cases. 
On each environment may be defined a different list of events to processing, so it is possible that no event will have defined a processing.
Each event may have defined unlimited number of processing (0 .. N) and each of them is processed as many times as processing settings exist for it.

According to the way of processing:

	
- JMS 
As first, the system finds a XSD definition according which an object for JMS message should be generated.
After that a XML file is generated according to the found XSD and its attributes are filled with values of objects form the input system event.

E.g.: An input system event contains a Salesroom and in ProcessingSpecification is set SellerPlaceRequest. The system generates a JMS message with XML file according to the SellerPlaceRequest XSD.
In its description are used attributes of Salesroom (i.e. object from the input system event) and attributes of Partner. In this case the instance of Partner may not be necessary passed in the system event - in this case is dynamically found as Salesroom->Partner).


	
- WS
As first, the system finds a particular connector on WS (defined by a source system, name of WS and name of a particular method - it is defined in ProcessingSpecification). Then the system creates an XML object according to a description of found WS and performs calling the the external system).



	
- UC
As first, the system finds a particular  use case  (defined by a code use case specified in ProcessingSpecification - there may be set e.g. "05_045") and performs calling it with parameters from the input system event. 


If any error occurs, the system logs an error and the system event is permanently stored (include its objects) for further solution. 


---ALGORITHM---
Input: a child of any of following SystemEvents

	
- ApplicationSystemEvent
	
- ContractSystemEvent
	
- IncomingPaymentSystemEvent
	
- OutgoingPaymentSystemEvent
	
- DDSSystemEvent
	
- InstallmentScheduleSystemEvent
	
- SNMSystemEvent
	
- CELAccountSE
	
- {ADD PCG-1089}CommoditySystemEvent{/ADD}


Initialization:
System finds all settings of a processing for the input SystemEvent described within the following documents:
System event processing setting
OSB JMS messages distribution setting
Each system processing setting contains the following parameters:
- WayOfProcessing
- ProcessingSpecification   
If no setting (i.e. a couple of WayOfProcessing and ProcessingSpecifiaction) is found, the algorithm ends without any processing.

For each found setting of a processing: 
According to the value of WayOfProcessing, the processing is performed by the following rules:
- "JMS" - System event processing - send a JMS message
- "WS" - System event processing - calling a WS of an external system
- "UC" - System event processing - calling an internal use case

In case an error occurs during processing, the system logs an error and stores the system event with all parameters for further processing.

## 🔗 Connections (11)

- ← Dependency «processed by»: [[SNMSystemEvent]]
- ← Dependency «processed by»: [[IncomingPaymentSystemEvent]]
- ← Dependency «processed by»: [[DDSSystemEvent]]
- ← Dependency «processed by»: [[{DEL}CommoditySystemEvent]]
- ← Dependency «processed by»: [[ApplicationSystemEvent]]
- ← Dependency «processed by»: [[InstallmentScheduleSystemEvent]]
- → Dependency: [[System event processing - calling an internal use case]]
- → Dependency: [[System event processing - send a JMS message]]
- → Dependency: [[System event processing - calling a WS of an external system]]
- ← Dependency «processed by»: [[CELAccountSE]]
- ← Dependency «processed by»: [[OutgoingPaymentSystemEvent]]

## 📊 Appears In (2 diagrams)

- Custom: System events processing setting
- Use Case: System events processing
