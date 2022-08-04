Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
  config.vm.box_check_update = true

  config.vm.provider "virtualbox" do |virtualbox|
    virtualbox.name = "awesome-vagrant"
    virtualbox.gui = false
    virtualbox.memory = "1024"
  end

  config.vm.network "forwarded_port", guest: 1234, host: 1234
  config.vm.network "private_network", ip: "192.168.56.2"

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
