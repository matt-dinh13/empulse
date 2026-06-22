---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/CLM"
domain: "Feature Guide"
element_id: 1464838
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Communication

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/CLM

## 📝 Notes

This basic functionality is able to record and display a communication history of a client done via various channels. Aside from communication done in BSL, the functionality is also able to display communication done in another systems (e.g. Message Server, Loxon, CCH - Centralized Contact History module etc.) according to a configuration. A structure of a communication record is fully configurable, i.e. a user can define channels, communication types, subtypes, result types and more.

## Communication management

List of communication records is available from two points in GUI:
- On every contract on the Contract detail screen, tab List of communication.
- Summarized for a client on the Client detail screen, tab List of communication (Client centre)

User can:
- View communication records from both BSL and external systems and view its detail
- Create a new communication record
- Create a ticket (see **Ticketing** functionality) related to a communication record
- Assign tickets to a communication record

## Communication import
Import of communication records is possible by multiple ways:
- Directly from BSL home page (button Communication list import). A user needs to insert a correct XML file with a set of communication records. If validations succeed the set of records is successfully imported, otherwise the user receives an error message into their inbox. This functionality is suitable for bulk import of more communication records.
- Via AutomaticCommunicationListImportWS (web service) from an external system. The behavior is similar to the first way but a result of the XLM file processing is sent asynchronously by calling ResultAutomaticImportIncomingPaymentsWS which has to be exposed by the external system. This functionality is suitable for bulk import of more communication records.
- Via CommunicationManagementWS.CreateCommunicationRecord (web service). This function is suitable for creation of single communication records.

## 📊 Appears In (1 diagrams)

- Package: CLM
