# Vagrant Setup pour K3s Training

## 📦 Installation

### Sur Windows (PowerShell en Administrateur):
```powershell
# Installer VirtualBox
choco install virtualbox

# Installer Vagrant
choco install vagrant
```

### Dans WSL (pour Ansible):
```bash
# Installer Vagrant
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install vagrant

# Configurer Vagrant pour WSL
export VAGRANT_WSL_ENABLE_WINDOWS_ACCESS="1"
export PATH="$PATH:/mnt/c/Program Files/Oracle/VirtualBox"

# Ajouter à ~/.bashrc
echo 'export VAGRANT_WSL_ENABLE_WINDOWS_ACCESS="1"' >> ~/.bashrc
echo 'export PATH="$PATH:/mnt/c/Program Files/Oracle/VirtualBox"' >> ~/.bashrc

# Installer Ansible
sudo apt update && sudo apt install ansible
```

## 🚀 Utilisation

### Depuis PowerShell Windows:
```powershell
cd C:\Users\Guillaume\Documents\k3s-training\vagrant

# Créer et démarrer toutes les VMs
vagrant up

# Voir le statut
vagrant status

# Arrêter les VMs
vagrant halt

# Redémarrer les VMs
vagrant reload

# Détruire les VMs
vagrant destroy

# SSH dans une VM
vagrant ssh bastion
vagrant ssh master
vagrant ssh worker1
```

### Depuis WSL:
```bash
cd /mnt/c/Users/Guillaume/Documents/k3s-training/vagrant

# Générer l'inventaire Ansible
./generate-inventory.sh

# Exécuter Ansible
cd ../ansible
ansible-playbook playbooks/playbook.yml
```

## 📊 Architecture

- **Bastion**: 1 vCPU, 1 Go RAM
- **Master**: 2 vCPU, 2 Go RAM
- **Worker 1**: 2 vCPU, 2 Go RAM
- **Worker 2**: 2 vCPU, 2 Go RAM

**Total**: 7 vCPU, 7 Go RAM

## 🔧 Workflow complet

1. **Créer les VMs** (Windows PowerShell):
   ```powershell
   vagrant up
   ```

2. **Générer l'inventaire** (WSL):
   ```bash
   cd /mnt/c/Users/Guillaume/Documents/k3s-training/vagrant
   ./generate-inventory.sh
   ```

3. **Configurer avec Ansible** (WSL):
   ```bash
   cd ../ansible
   ansible-playbook playbooks/playbook.yml
   ```

4. **Accéder au cluster**:
   ```bash
   vagrant ssh master
   kubectl get nodes
   ```

## 📝 Notes

- Les VMs utilisent DHCP pour le réseau privé
- Vagrant génère des clés SSH uniques par VM dans `.vagrant/machines/`
- Le script `generate-inventory.sh` doit être exécuté après `vagrant up`
