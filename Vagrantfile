# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
  config.vm.box_check_update = true
  config.vm.boot_timeout = 600
  config.vm.network "private_network", ip: "192.168.56.5"
  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "provision.yml"
    ansible.verbose = "v"
    ansible.extra_vars = {
      "ansible_become": true,
      "ansible_become_user": "root",
      "ansible_python_interpreter": "/usr/bin/python3"
    }
  end
end
