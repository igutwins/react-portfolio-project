#User Seeds

User.create(name: "Ian", email: "ian@mosaic.pe", title: "Manager")
User.create(name: "Joanne", email: "joanne@mosaic.pe", title: "Employee")
User.create(name: "Rona", email: "rona@bcg.com", title: "Advisor")
User.create(name: "Tyler", email: "tyler@mosaic.pe", title: "Employee")
User.create(name: "Nina", email: "nina@mosaic.pe", title: "Employee")
User.create(name: "Luca", email: "luca@mosaic.pe", title: "Employee")

#Task Seeds

Task.create(title: "Review CIM", description: "", assignee: "", reviewer: "", status: "Backlog", user_id: 1)
Task.create(title: "Build LBO", description: "", assignee: "", reviewer: "", status: "In Progress", user_id: 1)
Task.create(title: "First-look Write-up", description: "", assignee: "", reviewer: "", status: "For Review", user_id: 1)
Task.create(title: "QoE", description: "Engage advisors to do QoE Report", assignee: "", reviewer: "", status: "Done", user_id: 1)
Task.create(title: "Financing", description: "Reach out to bankers to get financing indications", assignee: "", reviewer: "", status: "Backlog", user_id: 1)
