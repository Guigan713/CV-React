#!/bin/bash
# ============================================================================
# Script d'initialisation Ansible Vault
# ============================================================================

set -e

VAULT_PASS_FILE="../.vault_pass"
VAULT_FILE="group_vars/all/vault.yml"

echo "🔐 Initialisation Ansible Vault"
echo ""

# Vérifier si le fichier de mot de passe existe
if [ ! -f "$VAULT_PASS_FILE" ]; then
    echo "Création du fichier de mot de passe vault..."
    read -sp "Entrez le mot de passe vault: " VAULT_PASSWORD
    echo ""
    echo "$VAULT_PASSWORD" > "$VAULT_PASS_FILE"
    chmod 600 "$VAULT_PASS_FILE"
    echo "✅ Fichier $VAULT_PASS_FILE créé"
else
    echo "✅ Fichier $VAULT_PASS_FILE existe déjà"
fi

# Chiffrer le fichier vault s'il n'est pas déjà chiffré
if head -1 "$VAULT_FILE" | grep -q "^\$ANSIBLE_VAULT"; then
    echo "✅ $VAULT_FILE est déjà chiffré"
else
    echo "Chiffrement de $VAULT_FILE..."
    ansible-vault encrypt "$VAULT_FILE" --vault-password-file "$VAULT_PASS_FILE"
    echo "✅ $VAULT_FILE chiffré"
fi

echo ""
echo "🎉 Vault initialisé !"
echo ""
echo "Commandes utiles:"
echo "  ansible-vault view $VAULT_FILE --vault-password-file $VAULT_PASS_FILE"
echo "  ansible-vault edit $VAULT_FILE --vault-password-file $VAULT_PASS_FILE"
