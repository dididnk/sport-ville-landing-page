import React from 'react';
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 privacy-policy-container">
      <h1 className="text-3xl font-bold gradient-text mb-6">Politique de Confidentialité 🇫🇷</h1>
      <h2 className="text-xl font-semibold mb-2">SportVille</h2>
      <p className="italic text-secondary mb-6">"Le sport à portée de main, la passion en commun."</p>

      <Section title="1. Introduction">
        Cette Politique de Confidentialité explique comment SportVille collecte, utilise et protège vos données personnelles. En utilisant l'application, vous acceptez les pratiques décrites dans cette politique.
      </Section>

      <Section title="2. Données Collectées">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>📧 Informations personnelles :</strong> Nom, adresse e-mail, numéro de téléphone.</li>
          <li><strong>📍 Données de localisation :</strong> Pour vous proposer des activités près de chez vous.</li>
          <li><strong>📱 Données d'utilisation :</strong> Informations sur votre interaction avec l'application.</li>
        </ul>
      </Section>

      <Section title="3. Utilisation des Données">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>✅ Personnaliser votre expérience :</strong> Vous proposer des activités adaptées à vos préférences.</li>
          <li><strong>📍 Améliorer le service :</strong> Analyser les tendances d'utilisation pour optimiser l'application.</li>
          <li><strong>📧 Communication :</strong> Vous informer des mises à jour ou événements importants.</li>
        </ul>
      </Section>

      <Section title="4. Partage des Données">
        SportVille ne partage pas vos données personnelles avec des tiers, sauf dans les cas suivants :
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>🔒 Consentement :</strong> Si vous avez donné votre accord explicite.</li>
          <li><strong>⚖️ Obligation légale :</strong> Si requis par la loi.</li>
        </ul>
      </Section>

      <Section title="5. Sécurité des Données">
        SportVille met en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé ou toute utilisation abusive.
      </Section>

      <Section title="6. Vos Droits">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>📋 Accéder à vos données :</strong> Demander une copie des informations que nous détenons sur vous.</li>
          <li><strong>✏️ Rectifier vos données :</strong> Corriger toute information incorrecte.</li>
          <li><strong>🗑️ Supprimer vos données :</strong> Demander la suppression de vos données personnelles.</li>
        </ul>
      </Section>

      <Section title="7. Modifications de la Politique">
        SportVille se réserve le droit de modifier cette Politique de Confidentialité. Les utilisateurs seront informés des changements via l'application ou par e-mail.
      </Section>

      <hr className="my-12 border-gray-400" />

      <h1 className="text-3xl font-bold gradient-text mb-6">Privacy Policy 🇬🇧</h1>
      <h2 className="text-xl font-semibold mb-2">SportVille</h2>
      <p className="italic text-secondary mb-6">"Sport at your fingertips, passion in common."</p>

      <Section title="1. Introduction">
        This Privacy Policy explains how SportVille collects, uses, and protects your personal data. By using the application, you agree to the practices described in this policy.
      </Section>

      <Section title="2. Data Collected">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>📧 Personal information:</strong> Name, email address, phone number.</li>
          <li><strong>📍 Location data:</strong> To suggest activities near you.</li>
          <li><strong>📱 Usage data:</strong> Information about your interaction with the application.</li>
        </ul>
      </Section>

      <Section title="3. Use of Data">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>✅ Personalize your experience:</strong> Offer activities tailored to your preferences.</li>
          <li><strong>📍 Improve the service:</strong> Analyze usage trends to optimize the application.</li>
          <li><strong>📧 Communication:</strong> Inform you about updates or important events.</li>
        </ul>
      </Section>

      <Section title="4. Data Sharing">
        SportVille does not share your personal data with third parties, except in the following cases:
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>🔒 Consent:</strong> If you have given explicit consent.</li>
          <li><strong>⚖️ Legal obligation:</strong> If required by law.</li>
        </ul>
      </Section>

      <Section title="5. Data Security">
        SportVille implements technical and organizational measures to protect your data against unauthorized access or misuse.
      </Section>

      <Section title="6. Your Rights">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>📋 Access your data:</strong> Request a copy of the information we hold about you.</li>
          <li><strong>✏️ Rectify your data:</strong> Correct any inaccurate information.</li>
          <li><strong>🗑️ Delete your data:</strong> Request the deletion of your personal data.</li>
        </ul>
      </Section>

      <Section title="7. Policy Modifications">
        SportVille reserves the right to modify this Privacy Policy. Users will be informed of changes via the application or by email.
      </Section>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
    <div>{children}</div>
  </section>
);

export default PrivacyPolicy;

