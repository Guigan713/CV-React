#!/bin/bash

# Script pour générer l'inventaire Ansible avec les IPs fixes

set -e

# Chemin vers le fichier d'inventaire
INVENTORY_FILE="../ansible/inventories/k3s-hosts.ini"

echo "Génération de l'inventaire Ansible avec IPs fixes..."

# Créer le fichier d'inventaire
cat > "$INVENTORY_FILE" << EOF
# Inventaire K3S généré automatiquement par Vagrant
# Date: $(date '+%Y-%m-%d %H:%M:%S')

[bastion]
k3s-bastion ansible_host=192.168.56.10 ansible_user=vagrant ansible_ssh_private_key_file=.vagrant/machines/bastion/virtualbox/private_key

[masters]
k3s-master ansible_host=192.168.56.11 ansible_user=vagrant ansible_ssh_private_key_file=.vagrant/machines/master/virtualbox/private_key

[workers]
k3s-worker-1 ansible_host=192.168.56.12 ansible_user=vagrant ansible_ssh_private_key_file=.vagrant/machines/worker1/virtualbox/private_key
k3s-worker-2 ansible_host=192.168.56.13 ansible_user=vagrant ansible_ssh_private_key_file=.vagrant/machines/worker2/virtualbox/private_key

[k3s_cluster:children]
masters
workers

[all_nodes:children]
bastion
k3s_cluster

[k3s_cluster:vars]
ansible_python_interpreter=/usr/bin/python3
ansible_ssh_common_args='-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null'
cluster_subnet=192.168.56.0/24

[all_nodes:vars]
ansible_python_interpreter=/usr/bin/python3
ansible_ssh_common_args='-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null'
EOF

echo "✅ Inventaire Ansible généré: $INVENTORY_FILE"
echo ""
echo "📋 IPs configurées:"
echo "  Bastion:   192.168.56.10"
echo "  Master:    192.168.56.11"
echo "  Worker 1:  192.168.56.12"
echo "  Worker 2:  192.168.56.13"
