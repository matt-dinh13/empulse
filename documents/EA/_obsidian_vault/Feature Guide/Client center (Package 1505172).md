---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/CLM"
domain: "Feature Guide"
element_id: 1505172
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Client center

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/CLM

## 📝 Notes

This feature uses Customer business entity from the CIF system to presentation client data related to specific contracts, marketing offers, **communication** list, **ticket** list

## Data structure
- Client's demographic data
- Documents
- Contacts
- Addresses
- Related persons
- Employment and employer
- Remittance

##Search for clients
Search for clients is performed in CIF / PIF, which works as primary system with client information and it can happen that Homer Select doesn't hold the most recent data about client. 
In most cases inserted search criteria are sent to CIF / PIF which will return set of results which are compliant with inserted criteria. 

## Client details

This functionality always displays the most recent data about client. For example when user asks for change of his permanent address and that change is done in CIF / PIF, change is immediately visible on clients detail as well. 

Client's detail can be also used as portal for other functionality:

- Client's data modification - redirection to CIF / PIF
- CRM - create, modify or display information about communication with client
- List of tickets - create, modify or display information about ticketing with client
- Contracts - go to detail of any client's contract
- Collection tools overview
- CB results
- Client password - view security question / answer of the client
- List of contracts (user can see all contracts of client and it's details)
- Tab List of communication (user can see all recorded communication, user can select communication record to see its detail, user can record new communication (using "create communication" button)

## Change client
- Assign to a new client

Contract is assigned with new CUID after validations are done

- Assign to the existing client

Existing CUID is required to be inserted (contract is then assigned to this CUID if validation succeed)

As already described this feature allows user to assign contract either to new / existing client.

## Synchronize client
- This feature is available directly on Contract detail - button Synchronize client. When user click on the button he/she has the following options:
- Synchronize data from client's latest contract
- Synchronize data from this contract

Data are synchronizes against CIF / Pif and updated as per the choice

## Contract detail client detail

It contains important client's data in several sections:

- Personal section. Contains information about client, i.e. Full name, Birth Date, Martial status etc…)

- Identification Documents. ID Documents and its number

- Contact / Permanent address. Contact / permanent address of client

You can also use Manage client button to be redirected directly to CIF / PIF to update client data.

## 📊 Appears In (1 diagrams)

- Package: CLM
