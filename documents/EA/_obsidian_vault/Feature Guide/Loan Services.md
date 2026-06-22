---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/CLM"
domain: "Feature Guide"
element_id: 1505040
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Loan Services

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/CLM

## 📝 Notes

Services, which are available to the given contract. Services assigned to the contract are set within Product catalogue. Services specify what different bonus actions or benefits client can achieve with this contract.

Services are divided into groups - insurance (as for functionality goes it behaves as a service type), bonus services (grace period, gift payment), early repayment services (contract early termination, full or partial early repayment), collection tool services (payment holidays, change of due date on request) and others.

User can see history of already created service requests - when and how was it changed and user can Evaluate the service to either see what conditions needs to be fulfilled to grant the service bonus or to create a request for change (e.g. change of Due date).

For revolving loan contracts it's possible to add, switch on or off services during contract lifecycle on demand. These services must be flagged as possible of doing so.

## Insurance
- **Insurance** have their specific section within Contract detail, where you can see list of insurance (services) with their information, which are assigned to this contract. **Insurance** can be of type - general, life, goods.  If allowed user can cancel or terminate the insurance.

## Bonus & Repayment services
- These services can grant the client specified bonuses if he's paying on time or if he decide he can user repayment service to repay the contract earlier than the last due date is set.

## Collection tool services
- Section of UI, which can be accessed either through section Services in Contract detail or through Client detail.

User can see there the possible services (which needs to be flagged as possible of collection tool) available in coloured grid. Available collection tool services doesn't have to be assigned to the contract at its creation but can be only assigned to original product (which was the contract created on) at a later date.

For these services user has to create request asking to grant the service. Execution of created requests can be automatic or manual handled similarly as Contract registration (more details in feature Contract management - Registration).

During registration user has to check asked client documents to be able to successfully register the request. User can also Record mistake (see Ticketing) of asked documents. Once the registration is finished the request is processed. Before registration it's possible to Cancel the created request or Reprint the documentation generated during request creation.

## 📊 Appears In (1 diagrams)

- Package: CLM
