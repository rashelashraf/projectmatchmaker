/**************************************
 * Global Data and Variables
 **************************************/
// Load previously saved group submissions from localStorage (if any)
let groupSubmissions = JSON.parse(localStorage.getItem("groupSubmissions")) || [];


// Project data array
    // Expanded Project Data with detailed descriptions and contribution suggestions.
    const projects = [
        {
          id: 1,
          title: "Transformer-Based Phishing Email Detection with User-Friendly Alert System",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "intermediate",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "A phishing detection system that leverages transformer models.",
          detailedDescription: "This project explores applying transformer architectures (such as BERT or GPT) to classify and detect phishing emails. Students will fine-tune a pre-trained model on email datasets to capture subtle language cues that differentiate phishing from legitimate communications.",
          contributionSuggestions: "Consider comparing multiple transformer models, incorporating explainable AI techniques (e.g. attention visualization), and designing a UI that presents both the detection outcome and the reasoning behind it.",
          prerequisites: ["Basic knowledge of machine learning(Classification, feature engineering, training/test workflow)", "Python programming(PyTorch or TensorFlow, scikit-learn, pandas)", "NLP concepts(Tokenization, embeddings(Word2Vec, GloVe), Pre-trained language models(BERT, RoBERTa))", "Graphical User Interface(Flask, JavaScript+HTML/CSS or React)"],
          resources: [
            { name: "Dataset: Enron Email Dataset", url: "https://www.cs.cmu.edu/~enron/" },
            { name: "Dataset: PhishingCorpus", url: "https://monkey.org/~jose/phishing/" },
            { name: "Code: PhishingCorpus", url: "https://github.com/liakoyras/thesis-phishing-email-detection" }
  
          ],
          researchArticles: [
            { name: "An improved transformer-based model for detecting phishing, spam and ham emails: A large language model approach", url: "https://onlinelibrary.wiley.com/doi/full/10.1002/spy2.402" },
            { name: "A Systematic Literature Review on Phishing Email Detection Using Natural Language Processing Techniques", url: "https://ieeexplore.ieee.org/abstract/document/9795286" },
            
            {
              name: "A Comprehensive Survey on Phishing Email Detection Techniques using Machine Learning and Deep Learning",
              url: "https://www.mdpi.com/2079-9292/12/20/4261"
            },
            {
              name: "Phishing email detection using natural language processing and deep learning techniques",
              url: "https://www.sciencedirect.com/science/article/pii/S1084804522001862"
            },
            {
              name: "Attention-Based Phishing Email Detection Using Multimodal Transformers",
              url: "https://arxiv.org/abs/2402.18093"
            },
            {
              name: "A Framework for Detection of Phishing Emails Using Natural Language Processing and Deep Learning",
              url: "https://ieeexplore.ieee.org/abstract/document/9565347"
            },
  
  
            {
              name: "A comprehensive review of machine learning-based phishing email detection techniques",
              url: "https://www.sciencedirect.com/science/article/pii/S0167404823002882"
            },
            {
              name: "Detection and Classification of Phishing Emails Using Machine Learning Techniques",
              url: "https://www.mdpi.com/2076-3417/13/15/8756"
            },
            {
              name: "A robust phishing email detection method based on ensemble learning",
              url: "https://www.sciencedirect.com/science/article/pii/S0003687024000863"
            },
            {
              name: "OneDrive link for downloading reasearch articles",
              url: "https://crownhe-my.sharepoint.com/:f:/g/personal/ashraf_uddin_cihe_edu_au/EiUfzKAYObhCsPjWHtwO-O4B6ZnZrRQ2lrU20kSewALCHg?e=T7pE6L"
            }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 2,
          title: "IoT Botnet Detection and Mitigation Framework",
          category: "iot",
          categoryName: "IoT & Edge Security",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks", "databases"],
          techNames: ["Python", "ML Frameworks", "Databases"],
          description: "Detect and mitigate botnet activity in IoT networks.",
          detailedDescription: "This project focuses on analyzing network traffic from IoT devices to detect coordinated botnet behavior. Students will design and test machine learning models to identify botnet signatures and develop automated response strategies to isolate compromised devices.",
          contributionSuggestions: "Improve feature extraction from network data, experiment with various classification models, and integrate real-time mitigation mechanisms in a simulated IoT environment.",
          prerequisites: ["Network security concepts", "Python programming", "Machine learning basics"],
          resources: [
            { name: "Dataset: N-BaIoT", url: "https://archive.ics.uci.edu/ml/datasets/detection_of_IoT_botnet_attacks_N_BaIoT" },
            { name: "Dataset: IoT-23", url: "https://www.stratosphereips.org/datasets-iot23" }
          ],
          researchArticles: [
            { name: "Botnet Detection in IoT Networks: Challenges and Solutions", url: "https://www.example.com/research/iot-botnet" },
            { name: "Mitigation Strategies for IoT Botnets", url: "https://www.example.com/research/botnet-mitigation" }
          ],
          estimatedTime: "4-5 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 3,
          title: "Blockchain-Based Data Integrity Verification System",
          category: "blockchain",
          categoryName: "Blockchain & Cryptography",
          skillLevel: "intermediate",
          technologies: ["javascript", "databases"],
          techNames: ["JavaScript/Web", "Databases"],
          description: "Ensure data integrity using blockchain.",
          detailedDescription: "In this project, students build a decentralized ledger using blockchain technology to record data transactions and modifications. The system provides a tamper-proof audit trail for sensitive data.",
          contributionSuggestions: "Experiment with different blockchain platforms (Ethereum, Hyperledger), develop secure smart contracts, and analyze performance under various load scenarios.",
          prerequisites: ["Basic blockchain knowledge", "Web development", "Cryptography basics"],
          resources: [
            { name: "Ethereum Documentation", url: "https://ethereum.org/developers/" },
            { name: "Hyperledger Fabric Documentation", url: "https://hyperledger-fabric.readthedocs.io/" }
          ],
          researchArticles: [
            { name: "Blockchain for Data Integrity Verification", url: "https://www.example.com/research/blockchain-integrity" },
            { name: "Decentralized Data Integrity in Cloud Systems", url: "https://www.example.com/research/decentralized-integrity" }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 4,
          title: "Security Operations Center Dashboard with ML-Based Alert Prioritization",
          category: "network",
          categoryName: "Network & Cloud Security",
          skillLevel: "intermediate",
          technologies: ["python", "javascript", "ml_frameworks", "databases"],
          techNames: ["Python", "JavaScript/Web", "ML Frameworks", "Databases"],
          description: "A dashboard to prioritize security alerts using ML.",
          detailedDescription: "This project involves building a Security Operations Center (SOC) dashboard that aggregates data from multiple sources and uses machine learning models to prioritize security alerts. The dashboard assists analysts by highlighting the most critical incidents.",
          contributionSuggestions: "Work on optimizing ML models for alert prioritization, integrating multiple data streams, and designing interactive visualizations that help analysts quickly grasp the threat landscape.",
          prerequisites: ["Network security concepts", "Web development", "Machine learning basics"],
          resources: [
            { name: "Dataset: CICIDS2017", url: "https://www.unb.ca/cic/datasets/ids-2017.html" },
            { name: "ELK Stack Documentation", url: "https://www.elastic.co/guide/index.html" }
          ],
          researchArticles: [
            { name: "Machine Learning in Security Operations Centers", url: "https://www.example.com/research/soc-ml" },
            { name: "Alert Prioritization using ML", url: "https://www.example.com/research/alert-prioritization" }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 5,
          title: "Deepfake Detection System Using Multimodal Analysis",
          category: "emerging",
          categoryName: "Emerging Technologies",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Detect deepfakes using audio, visual, and metadata analysis.",
          detailedDescription: "This project leverages multimodal deep learning techniques to detect deepfake videos and images. It combines audio, visual, and contextual features to improve detection accuracy over single-modal approaches.",
          contributionSuggestions: "Compare different fusion strategies for multimodal data, optimize deep learning models for robustness, and propose new evaluation metrics to measure detection performance.",
          prerequisites: ["Deep learning experience", "Computer vision knowledge", "Python programming"],
          resources: [
            { name: "Dataset: FaceForensics++", url: "https://github.com/ondyari/FaceForensics" },
            { name: "Dataset: DeepFake Detection Challenge", url: "https://www.kaggle.com/c/deepfake-detection-challenge/data" }
          ],
          researchArticles: [
            { name: "Multimodal Deepfake Detection", url: "https://www.example.com/research/multimodal-deepfake" },
            { name: "Advances in Deepfake Analysis", url: "https://www.example.com/research/deepfake-analysis" }
          ],
          estimatedTime: "4-6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 6,
          title: "Privacy-Preserving Smart Home Security Monitor",
          category: "iot",
          categoryName: "IoT & Edge Security",
          skillLevel: "intermediate",
          technologies: ["python", "javascript", "databases"],
          techNames: ["Python", "JavaScript/Web", "Databases"],
          description: "Monitor smart homes while preserving user privacy.",
          detailedDescription: "Design a smart home security system that collects and analyzes sensor data while applying privacy-preserving techniques (such as differential privacy). The system ensures user data remains confidential while still detecting security incidents.",
          contributionSuggestions: "Research state-of-the-art privacy techniques, integrate sensor data securely, and develop a user interface that displays alerts without exposing sensitive information.",
          prerequisites: ["IoT concepts", "Web development", "Privacy technologies"],
          resources: [
            { name: "Dataset: IoT Device Network Logs", url: "https://research.google/tools/datasets/iot-network-logs/" }
          ],
          researchArticles: [
            { name: "Privacy in Smart Home Security", url: "https://www.example.com/research/privacy-smart-home" },
            { name: "Preserving User Data in IoT Systems", url: "https://www.example.com/research/iot-privacy" }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 7,
          title: "User Behavior Analytics for Insider Threat Detection",
          category: "human",
          categoryName: "Human-Centric Security",
          skillLevel: "intermediate",
          technologies: ["python", "ml_frameworks", "databases"],
          techNames: ["Python", "ML Frameworks", "Databases"],
          description: "Analyze user behavior to detect insider threats.",
          detailedDescription: "Develop models to analyze and detect anomalous user behavior that may indicate insider threats. This involves processing large volumes of log data and identifying patterns that deviate from normal behavior.",
          contributionSuggestions: "Enhance data preprocessing techniques, compare unsupervised and supervised learning methods, and build a reporting module that helps security teams identify and respond to threats.",
          prerequisites: ["Machine learning basics", "Data analysis skills", "Python programming"],
          resources: [
            { name: "Dataset: CERT Insider Threat", url: "https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=508099" }
          ],
          researchArticles: [
            { name: "Behavioral Analytics for Insider Threats", url: "https://www.example.com/research/insider-threats" },
            { name: "User Behavior Profiling in Cybersecurity", url: "https://www.example.com/research/user-profiling" }
          ],
          estimatedTime: "3-5 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 8,
          title: "Mobile Application Security Scanner with Vulnerability Visualization",
          category: "mobile",
          categoryName: "Mobile & App Security",
          skillLevel: "intermediate",
          technologies: ["python", "javascript", "mobile_dev"],
          techNames: ["Python", "JavaScript/Web", "Mobile Development"],
          description: "Scan mobile apps for vulnerabilities and display results.",
          detailedDescription: "Develop a mobile security scanner that automatically analyzes applications for vulnerabilities. The results are displayed in a user-friendly dashboard that highlights critical issues and provides remediation suggestions.",
          contributionSuggestions: "Integrate with existing open-source scanning tools, optimize detection algorithms, and improve visualization to make the results actionable for developers.",
          prerequisites: ["Mobile app development", "Web development", "Security testing concepts"],
          resources: [
            { name: "OWASP Mobile Top 10", url: "https://owasp.org/www-project-mobile-top-10/" },
            { name: "MobSF Documentation", url: "https://mobsf.github.io/docs/" }
          ],
          researchArticles: [
            { name: "Mobile App Vulnerability Analysis", url: "https://www.example.com/research/mobile-vulnerabilities" },
            { name: "Automated Mobile Security Scanning", url: "https://www.example.com/research/mobile-scanner" }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 9,
          title: "Multi-Modal Malware Classification System with Visualization Dashboard",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks", "databases"],
          techNames: ["Python", "ML Frameworks", "Databases"],
          description: "Classify malware using both static and dynamic analysis with visualization.",
          detailedDescription: "This project combines static and dynamic malware analysis to classify malware into different families. An interactive dashboard visualizes classification results, enabling analysts to understand malware behavior.",
          contributionSuggestions: "Experiment with data fusion techniques, optimize deep learning architectures, and enhance dashboard interactivity for improved analysis.",
          prerequisites: ["Deep learning experience", "Malware analysis", "Web development basics"],
          resources: [
            { name: "Dataset: Microsoft Malware Classification Challenge", url: "https://www.kaggle.com/c/malware-classification" },
            { name: "VirusTotal API", url: "https://www.virustotal.com/" }
          ],
          researchArticles: [
            { name: "Multi-Modal Approaches in Malware Analysis", url: "https://www.example.com/research/multimodal-malware" },
            { name: "Visualization Techniques for Malware Classification", url: "https://www.example.com/research/malware-visualization" }
          ],
          estimatedTime: "4-6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 10,
          title: "Network Traffic Anomaly Detection Using Ensemble Learning Methods",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "intermediate",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Detect network anomalies with ensemble ML models.",
          detailedDescription: "Build an intrusion detection system that leverages ensemble learning to detect anomalous patterns in network traffic. This approach increases detection accuracy by combining multiple models.",
          contributionSuggestions: "Compare various ensemble techniques, optimize data preprocessing, and develop a real-time alerting system that displays anomalies on a dashboard.",
          prerequisites: ["Network security concepts", "ML basics"],
          resources: [
            { name: "Dataset: CICIDS2017", url: "https://www.unb.ca/cic/datasets/ids-2017.html" },
            { name: "NSL-KDD", url: "https://www.unb.ca/cic/datasets/nsl.html" }
          ],
          researchArticles: [
            { name: "Ensemble Learning in Intrusion Detection", url: "https://www.example.com/research/ensemble-ids" },
            { name: "Anomaly Detection Using Multiple Classifiers", url: "https://www.example.com/research/anomaly-ensemble" }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 11,
          title: "Federated Learning for Privacy-Preserving Intrusion Detection Systems",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks", "cloud"],
          techNames: ["Python", "ML Frameworks", "Cloud Services"],
          description: "Use federated learning to detect intrusions without sharing raw data.",
          detailedDescription: "This project builds an intrusion detection system using federated learning. It trains machine learning models on distributed data sources without centralizing sensitive information, thus preserving privacy while enhancing detection.",
          contributionSuggestions: "Explore different federated learning frameworks, address data heterogeneity challenges, and propose novel aggregation methods that ensure both security and model accuracy.",
          prerequisites: ["Federated learning", "Network security", "Machine learning"],
          resources: [
            { name: "Dataset: UNSW-NB15", url: "https://www.unsw.adfa.edu.au/" },
            { name: "Custom Simulation", url: "#" }
          ],
          researchArticles: [
            { name: "Federated Learning in Cybersecurity", url: "https://www.example.com/research/federated-ids" },
            { name: "Privacy-Preserving Intrusion Detection", url: "https://www.example.com/research/privacy-ids" }
          ],
          estimatedTime: "5-6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 12,
          title: "Adversarial Attack Detection in Deep Learning Security Models",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Detect adversarial attacks against deep learning models.",
          detailedDescription: "This project aims to develop techniques to identify and mitigate adversarial attacks on deep learning models used in cybersecurity. It involves simulating adversarial inputs and testing different defense mechanisms.",
          contributionSuggestions: "Experiment with adversarial training, implement detection layers, and compare various defense strategies to improve model robustness.",
          prerequisites: ["Deep learning", "Adversarial machine learning"],
          resources: [
            { name: "Dataset: MNIST", url: "http://yann.lecun.com/exdb/mnist/" },
            { name: "CIFAR-10", url: "https://www.cs.toronto.edu/~kriz/cifar.html" }
          ],
          researchArticles: [
            { name: "Detecting Adversarial Attacks in Neural Networks", url: "https://www.example.com/research/adversarial-detection" },
            { name: "Defensive Strategies Against Evasion Attacks", url: "https://www.example.com/research/defensive-distillation" }
          ],
          estimatedTime: "4-5 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 13,
          title: "Natural Language Processing for Social Engineering Detection",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "intermediate",
          technologies: ["python", "ml_frameworks", "javascript"],
          techNames: ["Python", "ML Frameworks", "JavaScript/Web"],
          description: "Detect social engineering attacks using NLP.",
          detailedDescription: "This project applies advanced NLP techniques to analyze textual data from emails and social media to detect social engineering and phishing attempts. It aims to automatically flag suspicious communications.",
          contributionSuggestions: "Fine-tune pre-trained language models, develop new text features, and design a module that presents suspicious indicators alongside contextual explanations.",
          prerequisites: ["NLP techniques", "ML basics"],
          resources: [
            { name: "Dataset: Phishing Corpus", url: "https://monkey.org/~jose/phishing/" },
            { name: "OpenPhish", url: "https://openphish.com/" }
          ],
          researchArticles: [
            { name: "NLP Approaches for Social Engineering Detection", url: "https://www.example.com/research/nlp-social-engineering" },
            { name: "Phishing Detection using Language Models", url: "https://www.example.com/research/phishing-nlp" }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 14,
          title: "Explainable AI for Behavioral Analytics in Network Security Monitoring",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks", "databases"],
          techNames: ["Python", "ML Frameworks", "Databases"],
          description: "Develop an explainable model for detecting anomalies in network behavior.",
          detailedDescription: "This project aims to create interpretable models that not only detect anomalies in network traffic but also explain the underlying reasons for their decisions. This transparency is key for trust and further model refinement.",
          contributionSuggestions: "Integrate explainability libraries such as SHAP or LIME, compare various interpretability methods, and create visual summaries of model decisions for security analysts.",
          prerequisites: ["Deep learning", "Explainable AI", "Network security"],
          resources: [
            { name: "Dataset: CERT Insider Threat", url: "https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=508099" }
          ],
          researchArticles: [
            { name: "Explainable AI in Cybersecurity", url: "https://www.example.com/research/xai-cybersecurity" },
            { name: "Behavioral Analytics with Explainable Models", url: "https://www.example.com/research/behavioral-xai" }
          ],
          estimatedTime: "4-6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 15,
          title: "Deep Learning-Based Zero-Day Vulnerability Prediction and Classification",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks", "databases"],
          techNames: ["Python", "ML Frameworks", "Databases"],
          description: "Predict and classify zero-day vulnerabilities using deep learning.",
          detailedDescription: "Using historical vulnerability data, this project trains deep learning models to predict the likelihood of zero-day vulnerabilities. The approach enables proactive security measures by identifying potential threats before they are exploited.",
          contributionSuggestions: "Experiment with various deep neural network architectures, improve data preprocessing techniques, and compare the predictive performance on multiple datasets.",
          prerequisites: ["Deep learning", "Vulnerability assessment"],
          resources: [
            { name: "Dataset: CVE Database", url: "https://cve.mitre.org/" },
            { name: "Kaggle Cybersecurity Datasets", url: "https://www.kaggle.com/" }
          ],
          researchArticles: [
            { name: "Zero-Day Vulnerability Prediction", url: "https://www.example.com/research/zero-day-prediction" },
            { name: "Deep Learning Approaches for Vulnerability Classification", url: "https://www.example.com/research/vulnerability-classification" }
          ],
          estimatedTime: "5-6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 16,
          title: "Lightweight Authentication Protocols for Resource-Constrained IoT Devices",
          category: "iot",
          categoryName: "IoT & Edge Security",
          skillLevel: "intermediate",
          technologies: ["python", "databases"],
          techNames: ["Python", "Databases"],
          description: "Design efficient authentication protocols for IoT devices.",
          detailedDescription: "This project focuses on developing authentication methods that are both secure and computationally efficient for resource-constrained IoT devices. The system should balance robust security with minimal processing overhead.",
          contributionSuggestions: "Review current lightweight cryptographic methods, simulate various IoT scenarios, and propose improvements that minimize latency while maintaining security.",
          prerequisites: ["IoT fundamentals", "Cryptography basics"],
          resources: [
            { name: "Literature on Lightweight Cryptography", url: "#" }
          ],
          researchArticles: [
            { name: "Lightweight Protocols for IoT", url: "https://www.example.com/research/lightweight-iot" },
            { name: "Efficient Authentication in IoT Networks", url: "https://www.example.com/research/iot-authentication" }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 17,
          title: "Blockchain-Based Secure Supply Chain Management",
          category: "blockchain",
          categoryName: "Blockchain & Cryptography",
          skillLevel: "intermediate",
          technologies: ["javascript", "databases"],
          techNames: ["JavaScript/Web", "Databases"],
          description: "Secure supply chain transactions using blockchain.",
          detailedDescription: "This project develops a decentralized system to track and verify supply chain transactions using blockchain technology. It aims to ensure transparency, data integrity, and security throughout the supply chain process.",
          contributionSuggestions: "Develop smart contracts to automate transaction verification, simulate different supply chain scenarios, and analyze the performance and security of the implemented system.",
          prerequisites: ["Blockchain basics", "Web development"],
          resources: [
            { name: "Ethereum Documentation", url: "https://ethereum.org/developers/" },
            { name: "Hyperledger Fabric Docs", url: "https://hyperledger-fabric.readthedocs.io/" }
          ],
          researchArticles: [
            { name: "Blockchain for Supply Chain Security", url: "https://www.example.com/research/supply-chain-blockchain" },
            { name: "Decentralized Supply Chain Management", url: "https://www.example.com/research/decentralized-scm" }
          ],
          estimatedTime: "4-5 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 18,
          title: "Zero-Trust Networking Models for Cloud Environments",
          category: "network",
          categoryName: "Network & Cloud Security",
          skillLevel: "advanced",
          technologies: ["python", "cloud", "databases"],
          techNames: ["Python", "Cloud Services", "Databases"],
          description: "Implement a zero-trust model in the cloud.",
          detailedDescription: "Design a zero-trust network architecture for cloud environments. The project focuses on continuous authentication and strict access control to ensure that no user or device is trusted by default.",
          contributionSuggestions: "Propose innovative continuous authentication strategies, integrate multi-factor authentication, and simulate various attack scenarios to evaluate the robustness of the architecture.",
          prerequisites: ["Cloud security", "Network fundamentals"],
          resources: [
            { name: "Literature on Zero-Trust", url: "#" }
          ],
          researchArticles: [
            { name: "Zero-Trust Architecture in Cloud", url: "https://www.example.com/research/zero-trust-cloud" },
            { name: "Securing Cloud Environments with Zero Trust", url: "https://www.example.com/research/cloud-zero-trust" }
          ],
          estimatedTime: "4-5 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 19,
          title: "Mobile Malware Detection Using Machine Learning",
          category: "mobile",
          categoryName: "Mobile & App Security",
          skillLevel: "intermediate",
          technologies: ["python", "mobile_dev", "ml_frameworks"],
          techNames: ["Python", "Mobile Development", "ML Frameworks"],
          description: "Detect malware in mobile apps using ML.",
          detailedDescription: "This project uses machine learning to analyze app behavior and permissions in order to detect malicious activities in mobile applications. Both static and dynamic analysis techniques can be explored.",
          contributionSuggestions: "Compare different ML models, improve feature extraction from mobile data, and design a lightweight mobile interface that provides real-time alerts.",
          prerequisites: ["Mobile app development", "Machine learning basics"],
          resources: [
            { name: "Dataset: AndroMalShare", url: "https://andro-malshare.com/" },
            { name: "CICMalDroid", url: "#" }
          ],
          researchArticles: [
            { name: "Detecting Android Malware using ML", url: "https://www.example.com/research/android-malware" },
            { name: "Obfuscated Malware Detection in Mobile Apps", url: "https://www.example.com/research/mobile-obfuscation" }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 20,
          title: "Cybersecurity for Connected Autonomous Vehicles",
          category: "emerging",
          categoryName: "Emerging Technologies",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Secure communications in autonomous vehicles.",
          detailedDescription: "This project develops security protocols and threat detection mechanisms for connected autonomous vehicles. It addresses challenges such as high mobility, dynamic network topologies, and the need for real-time threat detection in vehicular networks.",
          contributionSuggestions: "Design secure V2V communication protocols, simulate autonomous vehicle networks, and implement ML models that detect abnormal behaviors in real time.",
          prerequisites: ["Automotive security", "Network security"],
          resources: [
            { name: "Simulated Vehicle Data", url: "#" },
            { name: "Research Papers", url: "#" }
          ],
          researchArticles: [
            { name: "Security in Autonomous Vehicles", url: "https://www.example.com/research/autonomous-security" },
            { name: "V2V Communication and Threat Detection", url: "https://www.example.com/research/v2v-threats" }
          ],
          estimatedTime: "5-6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 21,
          title: "Digital Forensics Analysis Platform for Network Traffic",
          category: "forensics",
          categoryName: "Privacy & Digital Forensics",
          skillLevel: "advanced",
          technologies: ["python", "databases", "javascript"],
          techNames: ["Python", "Databases", "JavaScript/Web"],
          description: "Analyze network traffic using digital forensics techniques.",
          detailedDescription: "Develop a platform that leverages digital forensic methods to analyze network traffic logs for signs of malicious activity. The system aids in incident investigation and provides actionable insights.",
          contributionSuggestions: "Integrate open-source forensic tools, develop custom algorithms for anomaly detection, and design interactive dashboards for visual analysis.",
          prerequisites: ["Digital forensics", "Network security", "Web development"],
          resources: [
            { name: "Wireshark", url: "https://www.wireshark.org/" },
            { name: "Zeek (Bro)", url: "https://www.zeek.org/" }
          ],
          researchArticles: [
            { name: "Digital Forensics in Network Analysis", url: "https://www.example.com/research/network-forensics" },
            { name: "Advanced Techniques in Traffic Analysis", url: "https://www.example.com/research/traffic-analysis" }
          ],
          estimatedTime: "4-5 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 22,
          title: "Secure Hospital Management System for Patient Data and Inventory",
          category: "secure_mgmt",
          categoryName: "Secure Management System",
          skillLevel: "intermediate",
          technologies: ["javascript", "databases", "cloud"],
          techNames: ["JavaScript/Web", "Databases", "Cloud Services"],
          description: "Develop a secure system for managing hospital data.",
          detailedDescription: "Create a hospital management system that securely handles patient records, inventory, and billing data. Emphasize role-based access, encryption, and compliance with standards such as HIPAA.",
          contributionSuggestions: "Integrate robust encryption methods, design user roles and audit trails, and build a user-friendly interface that ensures secure and efficient data management.",
          prerequisites: ["Web development", "Database design", "Basic cryptography"],
          resources: [
            { name: "HIPAA Guidelines", url: "https://www.hhs.gov/hipaa/index.html" }
          ],
          researchArticles: [
            { name: "Secure Management in Healthcare", url: "https://www.example.com/research/secure-hospital" },
            { name: "Data Integrity in Patient Management Systems", url: "https://www.example.com/research/patient-data-security" }
          ],
          estimatedTime: "4-6 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 23,
          title: "Zero Knowledge Proof Based Authentication System",
          category: "zkp",
          categoryName: "Zero Knowledge Proof",
          skillLevel: "advanced",
          technologies: ["python", "databases"],
          techNames: ["Python", "Databases"],
          description: "Authenticate users without revealing sensitive data using ZKP.",
          detailedDescription: "Implement an authentication system that uses zero knowledge proofs (ZKPs) to verify user credentials without exposing the underlying sensitive information. This state-of-the-art approach enhances privacy and security.",
          contributionSuggestions: "Evaluate different ZKP protocols, optimize for performance, and integrate the system with existing authentication mechanisms.",
          prerequisites: ["Cryptographic protocols", "Zero knowledge proofs"],
          resources: [
            { name: "ZK Proof Tutorial", url: "https://zokrates.github.io/introduction.html" }
          ],
          researchArticles: [
            { name: "Zero Knowledge Proofs in Authentication", url: "https://www.example.com/research/zkp-authentication" },
            { name: "Privacy-Preserving Authentication Mechanisms", url: "https://www.example.com/research/privacy-auth" }
          ],
          estimatedTime: "4-5 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 24,
          title: "Blockchain-Based Decentralized Voting System",
          category: "blockchain",
          categoryName: "Blockchain & Cryptography",
          skillLevel: "advanced",
          technologies: ["javascript", "databases"],
          techNames: ["JavaScript/Web", "Databases"],
          description: "Develop a decentralized voting platform using blockchain.",
          detailedDescription: "This project creates a tamper-proof voting system using blockchain technology. It focuses on voter anonymity, secure vote recording, and transparent auditing, ensuring a high level of trust in the electoral process.",
          contributionSuggestions: "Design robust smart contracts for vote recording, simulate voter participation, and perform stress tests to assess security under various attack models.",
          prerequisites: ["Blockchain fundamentals", "Smart contract development"],
          resources: [
            { name: "Ethereum Documentation", url: "https://ethereum.org/developers/" }
          ],
          researchArticles: [
            { name: "Decentralized Voting Using Blockchain", url: "https://www.example.com/research/decentralized-voting" },
            { name: "Ensuring Vote Integrity with Blockchain", url: "https://www.example.com/research/vote-integrity" }
          ],
          estimatedTime: "5-6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 25,
          title: "Credit Card Fraud Detection Using Machine Learning",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "intermediate",
          technologies: ["python", "ml_frameworks", "databases"],
          techNames: ["Python", "ML Frameworks", "Databases"],
          description: "Detect credit card fraud through transaction analysis.",
          detailedDescription: "This project develops a machine learning model to analyze transaction data and detect patterns indicative of credit card fraud. The aim is to build a reliable fraud detection system that minimizes false positives.",
          contributionSuggestions: "Experiment with various classification algorithms, perform feature engineering on transaction data, and design a user interface for real-time fraud alerts and reports.",
          prerequisites: ["Data analysis", "Machine learning basics", "Python programming"],
          resources: [
            { name: "Kaggle Credit Card Fraud Dataset", url: "https://www.kaggle.com/mlg-ulb/creditcardfraud" }
          ],
          researchArticles: [
            { name: "Machine Learning Approaches for Fraud Detection", url: "https://www.example.com/research/fraud-detection" },
            { name: "Credit Card Fraud Analysis Using Ensemble Methods", url: "https://www.example.com/research/credit-fraud" }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 26,
          title: "Cyberbullying Detection and Prevention Platform",
          category: "human",
          categoryName: "Human-Centric Security",
          skillLevel: "intermediate",
          technologies: ["python", "ml_frameworks", "javascript"],
          techNames: ["Python", "ML Frameworks", "JavaScript/Web"],
          description: "Detect cyberbullying using NLP and ML.",
          detailedDescription: "This project uses NLP and machine learning to analyze online texts from social media, forums, and chat applications to detect signs of cyberbullying. It aims to automatically flag harmful content and offer recommendations for intervention.",
          contributionSuggestions: "Enhance text preprocessing, fine-tune language models, and design interactive tools to help educators and parents understand and combat cyberbullying.",
          prerequisites: ["NLP", "Machine learning", "Social media analysis"],
          resources: [
            { name: "Cyberbullying Research", url: "https://www.stopbullying.gov/" }
          ],
          researchArticles: [
            { name: "Cyberbullying Detection using NLP", url: "https://www.example.com/research/cyberbullying-detection" },
            { name: "Prevention Strategies for Cyberbullying", url: "https://www.example.com/research/cyberbullying-prevention" }
          ],
          estimatedTime: "4-5 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 27,
          title: "Spam Detection on Emails and Social Media",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "intermediate",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Filter out spam using NLP techniques.",
          detailedDescription: "This project implements a system that identifies spam emails and social media posts by analyzing textual content using NLP techniques. The objective is to reduce noise and improve user experience by filtering out unwanted messages.",
          contributionSuggestions: "Compare different vectorization techniques and classifiers, and design a real-time filtering system that can be integrated into communication platforms.",
          prerequisites: ["NLP basics", "Machine learning fundamentals"],
          resources: [
            { name: "SpamAssassin", url: "https://spamassassin.apache.org/" }
          ],
          researchArticles: [
            { name: "Spam Detection using NLP", url: "https://www.example.com/research/spam-nlp" },
            { name: "Machine Learning for Spam Filtering", url: "https://www.example.com/research/spam-filtering" }
          ],
          estimatedTime: "3 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 28,
          title: "Zero-Day Attack Detection Using Improved Heuristic Algorithms",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Detect previously unknown attacks using heuristics and ML.",
          detailedDescription: "This project combines heuristic methods with machine learning to identify zero-day attacks—threats that are unknown to traditional signature-based systems. The focus is on learning from deviations in network behavior.",
          contributionSuggestions: "Refine heuristic detection methods, simulate zero-day attack scenarios, and develop an automated alert system to notify administrators of potential threats.",
          prerequisites: ["Heuristic algorithms", "Machine learning", "Network security"],
          resources: [
            { name: "Zero-Day Research", url: "#" }
          ],
          researchArticles: [
            { name: "Heuristic Approaches to Zero-Day Detection", url: "https://www.example.com/research/zero-day-heuristic" },
            { name: "Machine Learning in Zero-Day Attack Detection", url: "https://www.example.com/research/zero-day-ml" }
          ],
          estimatedTime: "4-6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 29,
          title: "Unauthorized Access Detection and Response System",
          category: "network",
          categoryName: "Network & Cloud Security",
          skillLevel: "intermediate",
          technologies: ["python", "javascript", "databases"],
          techNames: ["Python", "JavaScript/Web", "Databases"],
          description: "Detect and respond to unauthorized access in real time.",
          detailedDescription: "This project develops a system that monitors network activity to detect unauthorized access attempts. Upon detection, the system automatically triggers response protocols to contain and mitigate potential breaches.",
          contributionSuggestions: "Develop custom detection rules, integrate with incident response systems, and build a dashboard for real-time monitoring and alerting.",
          prerequisites: ["Network monitoring", "Python scripting", "Incident response"],
          resources: [
            { name: "MITRE ATT&CK", url: "https://attack.mitre.org/" }
          ],
          researchArticles: [
            { name: "Detecting Unauthorized Access in Networks", url: "https://www.example.com/research/unauthorized-access" },
            { name: "Automated Response to Security Breaches", url: "https://www.example.com/research/automated-response" }
          ],
          estimatedTime: "4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 30,
          title: "Incident Grouping and Clustering for Cybersecurity Data",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks", "databases"],
          techNames: ["Python", "ML Frameworks", "Databases"],
          description: "Group similar cybersecurity incidents using clustering.",
          detailedDescription: "This project applies unsupervised learning techniques to cluster cybersecurity incidents. Clustering can help in identifying common patterns and root causes among security events, leading to more efficient threat management.",
          contributionSuggestions: "Experiment with various clustering algorithms (e.g., K-means, DBSCAN), fine-tune data preprocessing, and develop interactive visualizations to display the resulting clusters.",
          prerequisites: ["Clustering algorithms", "Data preprocessing", "Cybersecurity domain knowledge"],
          resources: [
            { name: "Kaggle Datasets", url: "https://www.kaggle.com/" }
          ],
          researchArticles: [
            { name: "Clustering Techniques in Cyber Threat Analysis", url: "https://www.example.com/research/incident-clustering" },
            { name: "Unsupervised Learning for Security Data", url: "https://www.example.com/research/unsupervised-security" }
          ],
          estimatedTime: "4-5 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 31,
          title: "Security Feature Engineering for Enhanced Threat Detection",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Engineer effective features from security data.",
          detailedDescription: "This project focuses on extracting and selecting the most effective features from cybersecurity data to improve the performance of machine learning models. Emphasis is placed on both domain knowledge and data-driven techniques.",
          contributionSuggestions: "Research and compare various feature engineering techniques, experiment with feature selection algorithms, and document the impact of different features on detection accuracy.",
          prerequisites: ["Feature engineering", "Data analytics", "Machine learning"],
          resources: [
            { name: "Feature Engineering Guide", url: "https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/" }
          ],
          researchArticles: [
            { name: "Effective Feature Engineering in Cybersecurity", url: "https://www.example.com/research/feature-engineering-security" },
            { name: "Data-driven Approaches to Security Feature Selection", url: "https://www.example.com/research/security-features" }
          ],
          estimatedTime: "3-4 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 32,
          title: "Obfuscated Android Malware Detection",
          category: "mobile",
          categoryName: "Mobile & App Security",
          skillLevel: "advanced",
          technologies: ["python", "mobile_dev", "ml_frameworks"],
          techNames: ["Python", "Mobile Development", "ML Frameworks"],
          description: "Detect obfuscated malware in Android apps.",
          detailedDescription: "This project tackles the challenge of identifying malware in Android applications that use obfuscation techniques. It combines static and dynamic analysis to reveal hidden malicious code.",
          contributionSuggestions: "Review state-of-the-art obfuscation techniques, experiment with both static and dynamic analysis, and propose enhancements to improve detection accuracy in obfuscated scenarios.",
          prerequisites: ["Android development", "Malware analysis", "Machine learning"],
          resources: [
            { name: "Android Malware Analysis", url: "https://www.acsac.org/" }
          ],
          researchArticles: [
            { name: "Detecting Obfuscated Android Malware", url: "https://www.example.com/research/android-obfuscation" },
            { name: "Static and Dynamic Analysis for Android Security", url: "https://www.example.com/research/android-analysis" }
          ],
          estimatedTime: "4-5 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 33,
          title: "Forensic Detection of Child Exploitation Material",
          category: "forensics",
          categoryName: "Privacy & Digital Forensics",
          skillLevel: "advanced",
          technologies: ["python", "databases"],
          techNames: ["Python", "Databases"],
          description: "Forensically detect child exploitation material online.",
          detailedDescription: "This sensitive project develops forensic tools that use image analysis and pattern recognition to identify potential child exploitation material. Extreme care and ethical guidelines are paramount in this research.",
          contributionSuggestions: "Conduct a comprehensive literature review, develop algorithms to detect subtle indicators, and propose a framework that balances detection accuracy with ethical considerations and privacy.",
          prerequisites: ["Digital forensics", "Image processing", "Ethical guidelines"],
          resources: [
            { name: "Child Exploitation Prevention", url: "https://www.inhope.org/" }
          ],
          researchArticles: [
            { name: "Forensic Techniques in Child Exploitation Detection", url: "https://www.example.com/research/child-exploitation-forensics" },
            { name: "Image Analysis for Forensic Investigations", url: "https://www.example.com/research/forensic-image-analysis" }
          ],
          estimatedTime: "6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 34,
          title: "Botnet Detection in Industrial Networks",
          category: "network",
          categoryName: "Network & Cloud Security",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks", "databases"],
          techNames: ["Python", "ML Frameworks", "Databases"],
          description: "Detect botnets in industrial environments.",
          detailedDescription: "This project focuses on analyzing network traffic in industrial settings to detect botnet activities that can compromise critical infrastructure. It employs advanced machine learning models to identify coordinated attacks.",
          contributionSuggestions: "Evaluate deep learning models for real-time traffic analysis, develop innovative feature extraction techniques, and design a monitoring dashboard for industrial network administrators.",
          prerequisites: ["Network traffic analysis", "Botnet behavior", "Machine learning"],
          resources: [
            { name: "Industrial Network Security", url: "#" }
          ],
          researchArticles: [
            { name: "Botnet Detection in Industrial Systems", url: "https://www.example.com/research/industrial-botnet" },
            { name: "Machine Learning for Botnet Analysis", url: "https://www.example.com/research/botnet-ml" }
          ],
          estimatedTime: "5 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 35,
          title: "Cyberattack Detection on Industrial Control Systems",
          category: "emerging",
          categoryName: "Emerging Technologies",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks", "databases"],
          techNames: ["Python", "ML Frameworks", "Databases"],
          description: "Detect cyberattacks on ICS using deep learning.",
          detailedDescription: "This project is dedicated to monitoring industrial control systems (ICS) and detecting cyberattacks using deep learning models. The objective is to secure critical infrastructure against sophisticated attacks.",
          contributionSuggestions: "Integrate sensor data from ICS, experiment with various deep learning architectures, and simulate different attack scenarios to validate system performance.",
          prerequisites: ["ICS protocols", "Deep learning", "Network security"],
          resources: [
            { name: "ICS Security", url: "#" }
          ],
          researchArticles: [
            { name: "Detecting Cyberattacks on ICS", url: "https://www.example.com/research/ics-attack-detection" },
            { name: "Deep Learning for Industrial Control Security", url: "https://www.example.com/research/deep-ics-security" }
          ],
          estimatedTime: "5-6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 36,
          title: "Intrusion Detection in VANETS (Vehicular Ad-Hoc Networks)",
          category: "emerging",
          categoryName: "Emerging Technologies",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Secure vehicular networks by detecting intrusions.",
          detailedDescription: "This project develops an intrusion detection system tailored for vehicular ad-hoc networks (VANETS). It addresses the dynamic and decentralized nature of VANETS to provide real-time threat alerts for connected vehicles.",
          contributionSuggestions: "Research VANET communication protocols, develop specialized ML models for mobile environments, and test the system in realistic vehicular network simulations.",
          prerequisites: ["VANET protocols", "Machine learning", "Network security"],
          resources: [
            { name: "VANET Security", url: "#" }
          ],
          researchArticles: [
            { name: "Intrusion Detection in VANETS", url: "https://www.example.com/research/vanet-intrusion" },
            { name: "Securing Vehicular Networks using ML", url: "https://www.example.com/research/vanet-ml" }
          ],
          estimatedTime: "6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 37,
          title: "Generative AI for Cybersecurity Scenario Simulation",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Simulate realistic cyber attack scenarios using generative AI.",
          detailedDescription: "Leverage generative models such as GANs or diffusion models to create synthetic cyberattack scenarios. These scenarios can be used for training, testing, and developing advanced threat detection systems.",
          contributionSuggestions: "Experiment with different generative architectures, assess the quality and realism of synthetic data, and integrate the simulation output into a training dashboard for security teams.",
          prerequisites: ["Generative models", "Cybersecurity domain knowledge"],
          resources: [
            { name: "Generative AI Research", url: "#" }
          ],
          researchArticles: [
            { name: "Generative Models for Cyber Attack Simulation", url: "https://www.example.com/research/generative-cyber" },
            { name: "Simulating Cyber Scenarios using AI", url: "https://www.example.com/research/cyber-simulation" }
          ],
          estimatedTime: "6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 38,
          title: "Reinforcement Learning-Based Adaptive Cyber Defense",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Develop an adaptive defense system using reinforcement learning.",
          detailedDescription: "This project uses reinforcement learning to create a dynamic cybersecurity defense system that learns optimal responses to evolving threats. The system continuously adapts by interacting with a simulated environment.",
          contributionSuggestions: "Test various RL algorithms, simulate diverse attack scenarios, and compare the performance of adaptive versus static defense mechanisms.",
          prerequisites: ["Reinforcement learning", "Cybersecurity concepts", "Python programming"],
          resources: [
            { name: "RL for Cyber Defense", url: "#" }
          ],
          researchArticles: [
            { name: "Adaptive Cyber Defense using RL", url: "https://www.example.com/research/rl-cyber-defense" },
            { name: "Reinforcement Learning in Security Applications", url: "https://www.example.com/research/rl-security" }
          ],
          estimatedTime: "6 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 39,
          title: "Dark Web Threat Intelligence Dashboard",
          category: "forensics",
          categoryName: "Privacy & Digital Forensics",
          skillLevel: "advanced",
          technologies: ["javascript", "databases", "ml_frameworks"],
          techNames: ["JavaScript/Web", "Databases", "ML Frameworks"],
          description: "Aggregate and visualize threat intelligence from the dark web.",
          detailedDescription: "This project involves creating an interactive dashboard that collects, analyzes, and visualizes threat intelligence data from the dark web. The goal is to provide security teams with real-time insights into emerging threats.",
          contributionSuggestions: "Integrate multiple data sources, develop advanced visualization techniques, and implement algorithms to automatically flag emerging trends.",
          prerequisites: ["Threat intelligence", "Data visualization", "Web development"],
          resources: [
            { name: "Dark Web Research", url: "#" }
          ],
          researchArticles: [
            { name: "Dark Web Threat Intelligence", url: "https://www.example.com/research/darkweb-intel" },
            { name: "Visualization Techniques for Dark Web Data", url: "https://www.example.com/research/darkweb-visualization" }
          ],
          estimatedTime: "5 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 40,
          title: "Deceptive Document Identification Using Machine Learning",
          category: "forensics",
          categoryName: "Privacy & Digital Forensics",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Identify fraudulent or deceptive documents using ML.",
          detailedDescription: "Develop an NLP-driven system to analyze documents and identify deceptive or fraudulent content. The project focuses on extracting subtle linguistic features and flagging inconsistencies.",
          contributionSuggestions: "Experiment with advanced text classification models, improve feature engineering for document analysis, and create a user interface that assists human reviewers in verifying flagged documents.",
          prerequisites: ["NLP", "Machine learning", "Document analysis"],
          resources: [
            { name: "Document Fraud Research", url: "#" }
          ],
          researchArticles: [
            { name: "Detecting Deceptive Documents", url: "https://www.example.com/research/deceptive-documents" },
            { name: "ML Approaches for Document Fraud", url: "https://www.example.com/research/document-fraud" }
          ],
          estimatedTime: "4-5 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 41,
          title: "ML-Based Spam Detection on Images",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "intermediate",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Detect spam in images using ML.",
          detailedDescription: "This project applies image recognition techniques to detect spam content within images. It uses convolutional neural networks (CNNs) to analyze visual patterns that indicate spam.",
          contributionSuggestions: "Experiment with different CNN architectures, enhance image preprocessing methods, and integrate the model into a prototype for real-time image spam filtering.",
          prerequisites: ["Image processing", "ML basics", "NLP"],
          resources: [
            { name: "Spam Image Detection", url: "#" }
          ],
          researchArticles: [
            { name: "Spam Detection in Visual Content", url: "https://www.example.com/research/spam-images" },
            { name: "ML Techniques for Image Spam", url: "https://www.example.com/research/image-spam-ml" }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 42,
          title: "ML-Based Malicious Call Detection System",
          category: "mobile",
          categoryName: "Mobile & App Security",
          skillLevel: "intermediate",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Analyze call patterns to detect malicious calls.",
          detailedDescription: "Develop a system that uses machine learning to analyze call data and detect patterns indicative of malicious or scam calls. It integrates signal processing and classification techniques.",
          contributionSuggestions: "Explore different ML classifiers for call data, optimize signal processing features, and build a dashboard for real-time call analysis and alerts.",
          prerequisites: ["Signal processing", "Machine learning", "Mobile network analysis"],
          resources: [
            { name: "Call Fraud Research", url: "#" }
          ],
          researchArticles: [
            { name: "Detecting Malicious Calls with ML", url: "https://www.example.com/research/malicious-calls" },
            { name: "Voice Analysis for Scam Detection", url: "https://www.example.com/research/voice-scam-detection" }
          ],
          estimatedTime: "3-4 months",
          complexity: "Medium",
          uiComponent: true
        },
        {
          id: 43,
          title: "Image-Based Malware Detection System",
          category: "ml",
          categoryName: "Machine Learning & AI",
          skillLevel: "advanced",
          technologies: ["python", "ml_frameworks"],
          techNames: ["Python", "ML Frameworks"],
          description: "Analyze binary images of malware for classification.",
          detailedDescription: "Convert malware binaries into images and use deep learning (CNNs) for classification. This innovative approach reveals hidden patterns in binary data through image-based analysis.",
          contributionSuggestions: "Investigate methods for converting binaries to images, compare CNN architectures, and validate the model across various malware datasets to improve classification accuracy.",
          prerequisites: ["Computer vision", "Deep learning", "Malware analysis"],
          resources: [
            { name: "Malware Imaging", url: "#" }
          ],
          researchArticles: [
            { name: "Image-Based Approaches for Malware Detection", url: "https://www.example.com/research/malware-imaging" },
            { name: "Deep Learning for Malware Classification", url: "https://www.example.com/research/deep-malware" }
          ],
          estimatedTime: "5 months",
          complexity: "High",
          uiComponent: true
        },
        {
          id: 44,
          title: "Privacy Leak Detection on Android Apps",
          category: "mobile",
          categoryName: "Mobile & App Security",
          skillLevel: "advanced",
          technologies: ["python", "mobile_dev"],
          techNames: ["Python", "Mobile Development"],
          description: "Detect privacy leaks in Android applications.",
          detailedDescription: "Analyze Android apps through static and dynamic analysis to detect unauthorized data transmissions and privacy breaches. The project emphasizes identifying potential leaks before they are exploited.",
          contributionSuggestions: "Combine static code analysis with runtime behavior monitoring, propose new metrics for leak detection, and develop a user interface that clearly displays potential privacy risks.",
          prerequisites: ["Android development", "Static code analysis", "Privacy frameworks"],
          resources: [
            { name: "Android Privacy Research", url: "#" }
          ],
          researchArticles: [
            { name: "Detecting Privacy Leaks in Mobile Apps", url: "https://www.example.com/research/privacy-leak-android" },
            { name: "Static Analysis for Privacy Protection", url: "https://www.example.com/research/android-static-analysis" }
          ],
          estimatedTime: "4-5 months",
          complexity: "High",
          uiComponent: true
        },
  
        {
      id: 45,
      title: "Secure Online Voting System",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["blockchain", "frontend", "backend", "security"],
      techNames: ["Ethereum/Hyperledger", "React/Angular", "Node.js/Python", "Zero-knowledge proofs/SSL/TLS"],
      description: "Develop a web-based voting system that ensures voter anonymity, integrity, and security.",
      detailedDescription: "Develop a secure online voting system featuring blockchain-based vote storage for tamper-proof records, end-to-end encryption for secure vote submission, voter authentication using biometrics or government-issued IDs, and real-time vote counting with transparency.",
      contributionSuggestions: "Integrate blockchain technology for tamper-proof records, implement robust encryption protocols, and design a transparent real-time vote counting dashboard.",
      prerequisites: ["Web development", "Blockchain fundamentals", "Cryptography", "API integration"],
      resources: [
        { name: "Ethereum Documentation", url: "https://ethereum.org/en/developers/docs/" }
      ],
      researchArticles: [
        { name: "Blockchain-based Voting Systems", url: "https://www.example.com/research/blockchain-voting" },
        { name: "Securing Online Voting", url: "https://www.example.com/research/online-voting-security" }
      ],
      estimatedTime: "6-8 months",
      complexity: "High",
      uiComponent: true
    },
    {
      id: 46,
      title: "Secure E-Learning Platform",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["frontend", "backend", "database", "security"],
      techNames: ["React/Angular", "Django/Laravel", "MySQL/PostgreSQL", "HTTPS/AES/JWT"],
      description: "Create a secure web-based e-learning platform with robust security features to protect user data and prevent cheating.",
      detailedDescription: "Develop a secure e-learning platform offering features such as secure login with 2FA, encrypted video lectures and course materials, plagiarism detection for assignments, and secure exam proctoring using AI to detect malpractice.",
      contributionSuggestions: "Implement secure authentication with 2FA, integrate encryption for media content, develop AI-based proctoring modules, and incorporate plagiarism detection tools.",
      prerequisites: ["Web development", "Database design", "Basic cybersecurity", "Familiarity with AI/ML concepts"],
      resources: [
        { name: "OWASP Secure Coding Practices", url: "https://owasp.org/www-project-secure-coding-practices/" }
      ],
      researchArticles: [
        { name: "Security in E-Learning Systems", url: "https://www.example.com/research/secure-elearning" }
      ],
      estimatedTime: "4-6 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 47,
      title: "Secure File Sharing and Storage System",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["frontend", "backend", "database", "security"],
      techNames: ["React/Vue.js", "Node.js/Flask", "MongoDB/Firebase", "AES encryption/SSL/TLS"],
      description: "Build a web-based platform for secure file sharing and storage with enhanced security features.",
      detailedDescription: "Develop a system similar to Google Drive that emphasizes end-to-end encryption for files, role-based access control for shared files, link expiration for shared files, and virus scanning for uploaded content.",
      contributionSuggestions: "Integrate robust encryption, design granular access control mechanisms, implement file expiry features, and incorporate virus scanning APIs.",
      prerequisites: ["Web development", "Database design", "Basic cryptography", "File handling"],
      resources: [
        { name: "NIST Encryption Guidelines", url: "https://www.nist.gov/publications/encryption-standards" }
      ],
      researchArticles: [
        { name: "Secure Cloud Storage Systems", url: "https://www.example.com/research/secure-storage" }
      ],
      estimatedTime: "5-7 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 48,
      title: "Cybersecurity Awareness Training Platform",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["frontend", "backend", "database", "security"],
      techNames: ["React/Angular", "Django/Ruby on Rails", "PostgreSQL/MySQL", "HTTPS/JWT"],
      description: "Develop a web-based platform to train users on cybersecurity best practices through interactive modules and quizzes.",
      detailedDescription: "Create a cybersecurity training platform featuring a gamified learning experience, phishing simulation exercises, progress tracking with certificates, and secure login with two-factor authentication.",
      contributionSuggestions: "Design interactive and engaging training modules, integrate simulation exercises, and implement robust user authentication and progress tracking systems.",
      prerequisites: ["Web development", "Database design", "Basic cybersecurity", "UI/UX design"],
      resources: [
        { name: "Cybersecurity Training Resources", url: "https://www.cisa.gov/cybersecurity-training" }
      ],
      researchArticles: [
        { name: "Effective Cybersecurity Training", url: "https://www.example.com/research/cyber-training" }
      ],
      estimatedTime: "3-5 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 49,
      title: "Secure Supply Chain Management System",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["blockchain", "frontend", "backend", "security"],
      techNames: ["Hyperledger/Ethereum", "React/Angular", "Node.js/Python", "SSL/TLS/AES"],
      description: "Create a web-based system to manage and secure supply chain transactions using blockchain technology.",
      detailedDescription: "Develop a supply chain management system that uses blockchain for transaction tracking, role-based access control for suppliers and buyers, real-time alerts for suspicious activities, and secure communication between stakeholders.",
      contributionSuggestions: "Integrate blockchain for transparent transaction records, implement role-based access controls, and set up real-time alert mechanisms for security anomalies.",
      prerequisites: ["Web development", "Blockchain fundamentals", "Database design", "Basic cybersecurity"],
      resources: [
        { name: "Hyperledger Documentation", url: "https://www.hyperledger.org/use" }
      ],
      researchArticles: [
        { name: "Blockchain in Supply Chain Management", url: "https://www.example.com/research/blockchain-scm" }
      ],
      estimatedTime: "6-8 months",
      complexity: "High",
      uiComponent: true
    },
    {
      id: 50,
      title: "Secure Online Banking System",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["frontend", "backend", "database", "security"],
      techNames: ["React/Angular", "Spring Boot/Django", "MySQL/PostgreSQL", "HTTPS/AES/JWT"],
      description: "Build a secure web-based banking system to protect user accounts and transactions.",
      detailedDescription: "Develop an online banking platform featuring secure login with 2FA and biometrics, real-time fraud detection using machine learning, encrypted transactions and account data, and comprehensive audit logs for all activities.",
      contributionSuggestions: "Implement multi-factor authentication, integrate real-time fraud detection algorithms, and design secure transaction and audit log systems.",
      prerequisites: ["Web development", "Database design", "Cryptography", "Machine Learning basics"],
      resources: [
        { name: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" }
      ],
      researchArticles: [
        { name: "Security in Online Banking", url: "https://www.example.com/research/online-banking-security" }
      ],
      estimatedTime: "8-10 months",
      complexity: "High",
      uiComponent: true
    },
    {
      id: 51,
      title: "Secure Job Portal",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["frontend", "backend", "database", "security"],
      techNames: ["React/Vue.js", "Node.js/Flask", "MongoDB/Firebase", "HTTPS/AES"],
      description: "Develop a secure web-based job portal to protect user data and prevent fraud.",
      detailedDescription: "Create a job portal that features secure login with 2FA, encrypted storage of resumes and personal data, AI-based fraud detection for job postings, and secure communication between employers and candidates.",
      contributionSuggestions: "Implement strong user authentication, integrate encryption for sensitive data, and develop AI-based fraud detection mechanisms.",
      prerequisites: ["Web development", "Database design", "Basic cybersecurity"],
      resources: [
        { name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" }
      ],
      researchArticles: [
        { name: "Securing Job Portals", url: "https://www.example.com/research/secure-job-portal" }
      ],
      estimatedTime: "4-6 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 52,
      title: "Secure Crowdfunding Platform",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["frontend", "backend", "database", "security"],
      techNames: ["React/Angular", "Django/Ruby on Rails", "PostgreSQL/MySQL", "HTTPS/SSL/TLS"],
      description: "Create a secure web-based crowdfunding platform to protect donors and project creators.",
      detailedDescription: "Develop a crowdfunding system that integrates a secure payment gateway, implements fraud detection for projects, encrypts user data and transactions, and offers transparent fund usage tracking.",
      contributionSuggestions: "Design a secure payment integration, implement encryption and fraud detection, and build a transparent dashboard for fund tracking.",
      prerequisites: ["Web development", "Database design", "Cryptography", "Payment gateway integration"],
      resources: [
        { name: "PCI DSS Guidelines", url: "https://www.pcisecuritystandards.org/" }
      ],
      researchArticles: [
        { name: "Security in Crowdfunding", url: "https://www.example.com/research/secure-crowdfunding" }
      ],
      estimatedTime: "5-7 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 53,
      title: "Secure Event Management System",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["frontend", "backend", "database", "security"],
      techNames: ["React/Vue.js", "Node.js/Flask", "MongoDB/Firebase", "HTTPS/AES"],
      description: "Build a secure web-based system for managing events, including ticketing and attendee data.",
      detailedDescription: "Develop an event management system that ensures secure ticket purchasing with encrypted payment processing, QR code-based attendee verification, role-based access control for event organizers, and audit logs for transactions and access.",
      contributionSuggestions: "Integrate secure payment processing, implement QR code verification, design role-based access controls, and maintain comprehensive audit logs.",
      prerequisites: ["Web development", "Database design", "Basic cryptography"],
      resources: [
        { name: "Event Security Best Practices", url: "https://www.example.com/resources/event-security" }
      ],
      researchArticles: [
        { name: "Security in Event Management", url: "https://www.example.com/research/event-security" }
      ],
      estimatedTime: "4-6 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 54,
      title: "Secure Social Media Platform",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["frontend", "backend", "database", "security"],
      techNames: ["React/Angular", "Django/Laravel", "PostgreSQL/MySQL", "HTTPS/AES"],
      description: "Develop a secure web-based social media platform with enhanced privacy and security features.",
      detailedDescription: "Create a social media platform that ensures end-to-end encryption for messages, robust privacy settings for user data, AI-based content moderation to detect harmful content, and secure login with 2FA.",
      contributionSuggestions: "Implement strong encryption for messaging, design customizable privacy settings, integrate AI content moderation, and secure user authentication.",
      prerequisites: ["Web development", "Database design", "Basic cybersecurity", "Familiarity with AI/ML"],
      resources: [
        { name: "Privacy Guidelines", url: "https://www.privacyinternational.org/" }
      ],
      researchArticles: [
        { name: "Securing Social Media Platforms", url: "https://www.example.com/research/secure-social-media" }
      ],
      estimatedTime: "5-7 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 55,
      title: "Secure Travel Booking System",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["frontend", "backend", "database", "security"],
      techNames: ["React/Vue.js", "Node.js/Flask", "MongoDB/Firebase", "HTTPS/SSL/TLS"],
      description: "Create a secure web-based travel booking system to protect user data and transactions.",
      detailedDescription: "Develop a travel booking platform that features secure payment gateway integration, encrypted storage of user data and booking details, real-time fraud detection, and secure communication between users and service providers.",
      contributionSuggestions: "Integrate secure payment processing, implement data encryption and fraud detection, and ensure secure communications.",
      prerequisites: ["Web development", "Database design", "Cryptography", "Payment gateway integration"],
      resources: [
        { name: "Travel Security Guidelines", url: "https://www.example.com/resources/travel-security" }
      ],
      researchArticles: [
        { name: "Security in Travel Booking", url: "https://www.example.com/research/secure-travel" }
      ],
      estimatedTime: "4-6 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 56,
      title: "Secure Donation Platform",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["blockchain", "frontend", "backend", "security"],
      techNames: ["Ethereum/Hyperledger", "React/Angular", "Django/Ruby on Rails", "HTTPS/AES"],
      description: "Build a web-based platform for secure donations to charities and non-profits.",
      detailedDescription: "Develop a secure donation system featuring secure payment processing, transparent fund tracking using blockchain, fraud detection for donation campaigns, and encrypted storage of donor data.",
      contributionSuggestions: "Integrate blockchain for transparent fund tracking, ensure secure payment processing, and implement robust fraud detection.",
      prerequisites: ["Web development", "Blockchain fundamentals", "Database design", "Cryptography"],
      resources: [
        { name: "Charity Commission Guidelines", url: "https://www.charitycommission.gov.uk/" }
      ],
      researchArticles: [
        { name: "Security in Donation Platforms", url: "https://www.example.com/research/secure-donation" }
      ],
      estimatedTime: "3-5 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 57,
      title: "Secure Online Marketplace",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["frontend", "backend", "database", "security"],
      techNames: ["React/Vue.js", "Node.js/Flask", "MongoDB/Firebase", "HTTPS/SSL/TLS"],
      description: "Develop a secure web-based marketplace to protect buyers and sellers.",
      detailedDescription: "Create an online marketplace that integrates secure payment gateway solutions, AI-based fraud detection for listings, encrypted storage of user data and transactions, and a dispute resolution system.",
      contributionSuggestions: "Implement secure payment processing, integrate fraud detection mechanisms, and ensure robust data encryption throughout the platform.",
      prerequisites: ["Web development", "Database design", "Cryptography", "Payment gateway integration"],
      resources: [
        { name: "E-commerce Security Best Practices", url: "https://www.example.com/resources/ecommerce-security" }
      ],
      researchArticles: [
        { name: "Security in Online Marketplaces", url: "https://www.example.com/research/online-marketplace-security" }
      ],
      estimatedTime: "5-7 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 58,
      title: "Secure Mental Health Support Platform",
      category: "secure_mgmt",
      categoryName: "Secure Management System",
      skillLevel: "intermediate",
      technologies: ["frontend", "backend", "database", "security"],
      techNames: ["React/Angular", "Django/Laravel", "PostgreSQL/MySQL", "HTTPS/AES"],
      description: "Create a secure web-based platform for mental health support focusing on user privacy and security.",
      detailedDescription: "Develop a mental health support platform that offers end-to-end encryption for chat and video sessions, secure storage of user data and session records, role-based access control for therapists and users, and AI-based mood tracking with support suggestions.",
      contributionSuggestions: "Implement robust encryption for communications, design role-based access controls, and integrate AI-driven mood tracking features to enhance user support.",
      prerequisites: ["Web development", "Database design", "Basic cybersecurity", "Familiarity with AI/ML"],
      resources: [
        { name: "Mental Health Privacy Guidelines", url: "https://www.example.com/resources/mental-health-privacy" }
      ],
      researchArticles: [
        { name: "Security in Mental Health Platforms", url: "https://www.example.com/research/mental-health-security" }
      ],
      estimatedTime: "4-6 months",
      complexity: "Medium",
      uiComponent: true
    },
  
        {
      id: 59,
      title: "Vulnerability Scanning and Penetration Testing Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Nessus", "OpenVAS", "Nmap", "Metasploit", "Burp Suite", "OWASP ZAP"],
      techNames: ["Nessus", "OpenVAS", "Nmap", "Metasploit", "Burp Suite", "OWASP ZAP"],
      description: "Develop tools for vulnerability scanning and penetration testing to identify and mitigate security risks.",
      detailedDescription: "Create a suite of tools including a web-based vulnerability scanner using Nessus or OpenVAS APIs, an automated penetration testing tool using Nmap or Metasploit, and a web application firewall (WAF) based on OWASP ZAP to detect and block attacks like SQL injection and XSS.",
      contributionSuggestions: "Leverage existing APIs, design intuitive dashboards, and integrate real-time alerting mechanisms for detected vulnerabilities.",
      prerequisites: ["Web development", "Network security basics", "API integration"],
      resources: [
        { name: "OWASP Testing Guide", url: "https://owasp.org/www-project-web-security-testing-guide/" }
      ],
      researchArticles: [
        { name: "Advances in Penetration Testing", url: "https://www.example.com/research/penetration-testing" }
      ],
      estimatedTime: "4-6 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 60,
      title: "Network Traffic Analysis Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Wireshark", "Zeek", "Suricata", "Snort"],
      techNames: ["Wireshark", "Zeek", "Suricata", "Snort"],
      description: "Develop tools for real-time network traffic analysis and intrusion detection.",
      detailedDescription: "Create a system that monitors network traffic using tools like Wireshark or Zeek, implements IDS functionalities with Snort or Suricata, and provides a dashboard to visualize network anomalies from Zeek logs.",
      contributionSuggestions: "Utilize packet capture libraries, integrate IDS rule engines, and design interactive dashboards for real-time monitoring.",
      prerequisites: ["Networking fundamentals", "Packet analysis", "IDS/IPS basics"],
      resources: [
        { name: "Wireshark Official", url: "https://www.wireshark.org/" }
      ],
      researchArticles: [
        { name: "Network Traffic Analysis", url: "https://www.example.com/research/network-traffic-analysis" }
      ],
      estimatedTime: "3-5 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 61,
      title: "Malware Analysis Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Cuckoo Sandbox", "VirusTotal", "Ghidra", "IDA Pro"],
      techNames: ["Cuckoo Sandbox", "VirusTotal", "Ghidra", "IDA Pro"],
      description: "Develop tools for automated malware analysis and detection.",
      detailedDescription: "Build a web-based platform that integrates Cuckoo Sandbox for dynamic malware analysis, utilizes the VirusTotal API for threat intelligence, and offers static analysis capabilities with tools like Ghidra or IDA Pro.",
      contributionSuggestions: "Combine dynamic and static analysis techniques, design intuitive reporting features, and integrate external threat intelligence feeds.",
      prerequisites: ["Malware analysis fundamentals", "Reverse engineering basics", "Scripting"],
      resources: [
        { name: "Malware Analysis Resources", url: "https://www.example.com/malware-analysis" }
      ],
      researchArticles: [
        { name: "Modern Malware Analysis Techniques", url: "https://www.example.com/research/malware-analysis" }
      ],
      estimatedTime: "4-6 months",
      complexity: "High",
      uiComponent: true
    },
    {
      id: 62,
      title: "Security Information and Event Management (SIEM) Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Splunk", "ELK Stack", "Graylog"],
      techNames: ["Splunk", "ELK Stack", "Graylog"],
      description: "Develop a SIEM solution for log management and threat detection.",
      detailedDescription: "Create a custom SIEM solution using the ELK Stack for log aggregation and analysis, develop real-time threat detection dashboards using Splunk, and implement a log management system with Graylog for security monitoring.",
      contributionSuggestions: "Integrate log collection agents, design real-time analytics dashboards, and implement alerting mechanisms based on log anomalies.",
      prerequisites: ["Log analysis", "Data visualization", "Security monitoring basics"],
      resources: [
        { name: "Splunk Documentation", url: "https://www.splunk.com/en_us/resources.html" }
      ],
      researchArticles: [
        { name: "Evolution of SIEM", url: "https://www.example.com/research/siem-evolution" }
      ],
      estimatedTime: "4-6 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 63,
      title: "Password Security Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["John the Ripper", "Hashcat", "KeePass"],
      techNames: ["John the Ripper", "Hashcat", "KeePass"],
      description: "Develop tools for assessing password strength and managing passwords securely.",
      detailedDescription: "Create a password strength checker using algorithms from Hashcat or John the Ripper, develop a secure password manager inspired by KeePass, and build a simulation tool to test password policies through brute-force attack simulations.",
      contributionSuggestions: "Implement secure encryption methods, design user-friendly interfaces, and integrate testing modules for password policy compliance.",
      prerequisites: ["Cryptography basics", "Scripting", "Web development"],
      resources: [
        { name: "Password Security Guidelines", url: "https://owasp.org/index.php/Password_Storage_Cheat_Sheet" }
      ],
      researchArticles: [
        { name: "Password Security Challenges", url: "https://www.example.com/research/password-security" }
      ],
      estimatedTime: "3-5 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 64,
      title: "Blockchain Security Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Ganache", "Truffle", "Hyperledger Fabric", "Ethereum"],
      techNames: ["Ganache", "Truffle", "Hyperledger Fabric", "Ethereum"],
      description: "Develop tools for securing blockchain applications.",
      detailedDescription: "Build a blockchain-based secure voting system using Hyperledger Fabric, develop a smart contract vulnerability scanner using Truffle, and create a decentralized identity management system leveraging Ethereum's capabilities.",
      contributionSuggestions: "Integrate blockchain test networks, implement smart contract analysis, and design secure decentralized architectures.",
      prerequisites: ["Blockchain fundamentals", "Smart contract development", "Cryptography"],
      resources: [
        { name: "Ethereum Developer Resources", url: "https://ethereum.org/en/developers/" }
      ],
      researchArticles: [
        { name: "Blockchain Security Best Practices", url: "https://www.example.com/research/blockchain-security" }
      ],
      estimatedTime: "5-7 months",
      complexity: "High",
      uiComponent: true
    },
    {
      id: 65,
      title: "Cloud Security Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["AWS Security Hub", "Azure Security Center", "Google Cloud Security Command Center"],
      techNames: ["AWS Security Hub", "Azure Security Center", "Google Cloud Security Command Center"],
      description: "Develop tools for monitoring and securing cloud environments.",
      detailedDescription: "Create a cloud security monitoring tool by integrating APIs from AWS Security Hub, develop a misconfiguration detection system for cloud services, and build a cloud-native intrusion detection solution using Azure or Google Cloud platforms.",
      contributionSuggestions: "Leverage cloud provider APIs, implement real-time monitoring, and design alert systems for cloud misconfigurations.",
      prerequisites: ["Cloud computing basics", "API integration", "Security monitoring"],
      resources: [
        { name: "AWS Security Hub", url: "https://aws.amazon.com/security-hub/" }
      ],
      researchArticles: [
        { name: "Cloud Security Challenges", url: "https://www.example.com/research/cloud-security" }
      ],
      estimatedTime: "4-6 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 66,
      title: "IoT Security Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Shodan", "IoT Inspector", "MQTT Explorer"],
      techNames: ["Shodan", "IoT Inspector", "MQTT Explorer"],
      description: "Develop tools for assessing and monitoring IoT device security.",
      detailedDescription: "Build an IoT device vulnerability scanner using Shodan's API, develop a secure MQTT communication framework for IoT devices, and create a dashboard for monitoring IoT device security using data from IoT Inspector.",
      contributionSuggestions: "Utilize IoT-specific APIs, implement secure communication protocols, and design real-time monitoring dashboards.",
      prerequisites: ["IoT fundamentals", "Networking basics", "API integration"],
      resources: [
        { name: "Shodan", url: "https://www.shodan.io/" }
      ],
      researchArticles: [
        { name: "IoT Security Analysis", url: "https://www.example.com/research/iot-security" }
      ],
      estimatedTime: "3-5 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 67,
      title: "Phishing Detection Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["PhishTank", "Google Safe Browsing API", "OpenPhish"],
      techNames: ["PhishTank", "Google Safe Browsing API", "OpenPhish"],
      description: "Develop tools for real-time phishing detection.",
      detailedDescription: "Create a real-time phishing URL detector by integrating APIs from PhishTank or OpenPhish, develop a browser extension leveraging the Google Safe Browsing API for phishing detection, and build a machine learning-based phishing email classifier.",
      contributionSuggestions: "Integrate external phishing data sources, design browser extension interfaces, and leverage machine learning for improved detection accuracy.",
      prerequisites: ["Web development", "API integration", "Machine learning basics"],
      resources: [
        { name: "PhishTank", url: "https://www.phishtank.com/" }
      ],
      researchArticles: [
        { name: "Phishing Detection Techniques", url: "https://www.example.com/research/phishing-detection" }
      ],
      estimatedTime: "4-6 months",
      complexity: "High",
      uiComponent: true
    },
    {
      id: 68,
      title: "Digital Forensics Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Autopsy", "Volatility", "FTK Imager"],
      techNames: ["Autopsy", "Volatility", "FTK Imager"],
      description: "Develop tools for digital forensic analysis and evidence collection.",
      detailedDescription: "Build a web-based digital forensics platform that integrates Autopsy for file system analysis, develop a memory analysis tool using Volatility for malware detection, and create a file carving tool using FTK Imager for recovering deleted files.",
      contributionSuggestions: "Combine forensic analysis techniques, design detailed reporting functionalities, and integrate data visualization for forensic evidence.",
      prerequisites: ["Digital forensics basics", "Operating systems", "Scripting"],
      resources: [
        { name: "Digital Forensics Framework", url: "https://www.sleuthkit.org/" }
      ],
      researchArticles: [
        { name: "Modern Digital Forensics", url: "https://www.example.com/research/digital-forensics" }
      ],
      estimatedTime: "4-6 months",
      complexity: "High",
      uiComponent: true
    },
    {
      id: 69,
      title: "Cryptography Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["OpenSSL", "GnuPG", "Cryptool"],
      techNames: ["OpenSSL", "GnuPG", "Cryptool"],
      description: "Develop tools for encryption, decryption, and cryptographic analysis.",
      detailedDescription: "Build a web-based encryption/decryption tool using OpenSSL, develop a secure file-sharing application leveraging GnuPG, and create a visualization tool for understanding cryptographic algorithms using Cryptool.",
      contributionSuggestions: "Integrate robust encryption libraries, design user-friendly interfaces for cryptographic operations, and provide visual insights into cryptographic processes.",
      prerequisites: ["Cryptography fundamentals", "Web development", "Programming"],
      resources: [
        { name: "OpenSSL", url: "https://www.openssl.org/" }
      ],
      researchArticles: [
        { name: "Advances in Cryptography", url: "https://www.example.com/research/cryptography" }
      ],
      estimatedTime: "3-5 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 70,
      title: "Threat Intelligence Platforms",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["MISP", "AlienVault OTX", "ThreatConnect"],
      techNames: ["MISP", "AlienVault OTX", "ThreatConnect"],
      description: "Develop platforms for threat intelligence and information sharing.",
      detailedDescription: "Create a threat intelligence dashboard using MISP or AlienVault OTX, build a threat feed aggregator for real-time threat updates, and develop a machine learning-based threat prediction system using threat intelligence data.",
      contributionSuggestions: "Integrate multiple threat data sources, design interactive dashboards, and leverage machine learning for predictive analysis.",
      prerequisites: ["Cyber threat intelligence", "Data analytics", "Machine learning basics"],
      resources: [
        { name: "MISP", url: "https://www.misp-project.org/" }
      ],
      researchArticles: [
        { name: "Threat Intelligence Systems", url: "https://www.example.com/research/threat-intelligence" }
      ],
      estimatedTime: "4-6 months",
      complexity: "High",
      uiComponent: true
    },
    {
      id: 71,
      title: "Web Application Security Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["OWASP ZAP", "Nikto", "SQLMap"],
      techNames: ["OWASP ZAP", "Nikto", "SQLMap"],
      description: "Develop tools for web application vulnerability scanning and security testing.",
      detailedDescription: "Build a web vulnerability scanner using OWASP ZAP or Nikto, develop a SQL injection detection tool leveraging SQLMap, and create a secure coding assistant to help developers avoid common vulnerabilities.",
      contributionSuggestions: "Integrate automated scanning tools, design a user-friendly reporting system, and provide actionable insights for remediation.",
      prerequisites: ["Web security fundamentals", "Vulnerability assessment", "Scripting"],
      resources: [
        { name: "OWASP ZAP", url: "https://www.zaproxy.org/" }
      ],
      researchArticles: [
        { name: "Web Application Security", url: "https://www.example.com/research/web-security" }
      ],
      estimatedTime: "3-5 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 72,
      title: "Endpoint Security Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Osquery", "CrowdStrike Falcon", "Carbon Black"],
      techNames: ["Osquery", "CrowdStrike Falcon", "Carbon Black"],
      description: "Develop tools for endpoint monitoring and threat detection.",
      detailedDescription: "Build an endpoint monitoring tool using Osquery, develop a ransomware detection system leveraging CrowdStrike Falcon APIs, and create a behavioral analysis tool for detecting endpoint threats.",
      contributionSuggestions: "Integrate endpoint data collection, design anomaly detection algorithms, and provide real-time threat alerts.",
      prerequisites: ["Endpoint security", "Operating systems", "Scripting"],
      resources: [
        { name: "Osquery", url: "https://osquery.io/" }
      ],
      researchArticles: [
        { name: "Endpoint Security Trends", url: "https://www.example.com/research/endpoint-security" }
      ],
      estimatedTime: "4-6 months",
      complexity: "High",
      uiComponent: true
    },
    {
      id: 73,
      title: "Open-Source Security Platforms",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Security Onion", "Kali Linux", "pfSense"],
      techNames: ["Security Onion", "Kali Linux", "pfSense"],
      description: "Develop open-source solutions for network security and penetration testing.",
      detailedDescription: "Build a network security monitoring system using Security Onion, develop a custom penetration testing toolkit based on Kali Linux, and create a firewall/intrusion prevention system using pfSense.",
      contributionSuggestions: "Leverage open-source tools, design modular systems, and integrate customizable security features for different environments.",
      prerequisites: ["Open-source software", "Network security", "Linux fundamentals"],
      resources: [
        { name: "Security Onion", url: "https://securityonion.net/" }
      ],
      researchArticles: [
        { name: "Open-Source Security Solutions", url: "https://www.example.com/research/opensource-security" }
      ],
      estimatedTime: "4-6 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 74,
      title: "Privacy-Preserving Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Tor", "Tails", "Signal"],
      techNames: ["Tor", "Tails", "Signal"],
      description: "Develop tools that enhance user privacy and anonymity.",
      detailedDescription: "Build a privacy-focused messaging application inspired by Signal, develop a Tor-based anonymous browsing tool, and create a privacy audit tool for analyzing app permissions and data sharing.",
      contributionSuggestions: "Implement strong privacy protocols, design intuitive user interfaces, and ensure robust data anonymization techniques.",
      prerequisites: ["Privacy concepts", "Web development", "Cryptography"],
      resources: [
        { name: "Tor Project", url: "https://www.torproject.org/" }
      ],
      researchArticles: [
        { name: "Privacy Preservation Techniques", url: "https://www.example.com/research/privacy-preservation" }
      ],
      estimatedTime: "3-5 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 75,
      title: "AI/ML-Based Cybersecurity Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn"],
      techNames: ["TensorFlow", "PyTorch", "Scikit-learn"],
      description: "Develop cybersecurity tools powered by AI and machine learning.",
      detailedDescription: "Build a malware detection system using TensorFlow or PyTorch, develop an anomaly detection system leveraging Scikit-learn, and create a phishing detection tool using NLP and machine learning techniques.",
      contributionSuggestions: "Integrate AI/ML models for threat detection, design training pipelines for data processing, and implement feedback mechanisms for continuous improvement.",
      prerequisites: ["Machine learning basics", "Data analytics", "Programming"],
      resources: [
        { name: "TensorFlow", url: "https://www.tensorflow.org/" }
      ],
      researchArticles: [
        { name: "AI in Cybersecurity", url: "https://www.example.com/research/ai-cybersecurity" }
      ],
      estimatedTime: "4-6 months",
      complexity: "High",
      uiComponent: true
    },
    {
      id: 76,
      title: "Cybersecurity Education Platforms",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Hack The Box", "TryHackMe", "CyberSec Labs"],
      techNames: ["Hack The Box", "TryHackMe", "CyberSec Labs"],
      description: "Develop platforms for cybersecurity training and education.",
      detailedDescription: "Create a cybersecurity training platform featuring interactive challenges, capture-the-flag (CTF) games, and virtual lab environments to provide hands-on learning experiences.",
      contributionSuggestions: "Design engaging training modules, integrate challenge-based learning, and develop virtual lab simulations for real-world practice.",
      prerequisites: ["Cybersecurity fundamentals", "Web development", "Educational technology"],
      resources: [
        { name: "TryHackMe", url: "https://tryhackme.com/" }
      ],
      researchArticles: [
        { name: "Cybersecurity Education", url: "https://www.example.com/research/cyber-education" }
      ],
      estimatedTime: "3-5 months",
      complexity: "Medium",
      uiComponent: true
    },
    {
      id: 77,
      title: "Secure Communication Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Signal", "Wire", "Matrix"],
      techNames: ["Signal", "Wire", "Matrix"],
      description: "Develop tools for secure and private communication.",
      detailedDescription: "Build a secure chat application inspired by Signal or Wire, develop a secure video conferencing tool using end-to-end encryption, and create a privacy-focused email client.",
      contributionSuggestions: "Implement robust encryption protocols, design intuitive communication interfaces, and ensure real-time secure data transmission.",
      prerequisites: ["Cryptography", "Web development", "Real-time communication"],
      resources: [
        { name: "Signal", url: "https://signal.org/" }
      ],
      researchArticles: [
        { name: "Secure Communication Protocols", url: "https://www.example.com/research/secure-communication" }
      ],
      estimatedTime: "4-6 months",
      complexity: "High",
      uiComponent: true
    },
    {
      id: 78,
      title: "Cybersecurity Dashboards and Visualization Tools",
      category: "tools_design",
      categoryName: "Cybersecurity Tools Design",
      skillLevel: "intermediate",
      technologies: ["Grafana", "Tableau", "Power BI"],
      techNames: ["Grafana", "Tableau", "Power BI"],
      description: "Develop tools for visualizing cybersecurity data and threat intelligence.",
      detailedDescription: "Create a cybersecurity dashboard for real-time threat data visualization using Grafana, build a real-time attack map leveraging Tableau or Power BI, and develop a threat intelligence visualization tool.",
      contributionSuggestions: "Integrate data visualization libraries, design interactive dashboards, and provide real-time analytics for threat monitoring.",
      prerequisites: ["Data visualization", "Web development", "Cybersecurity fundamentals"],
      resources: [
        { name: "Grafana", url: "https://grafana.com/" }
      ],
      researchArticles: [
        { name: "Cybersecurity Visualization", url: "https://www.example.com/research/cyber-visualization" }
      ],
      estimatedTime: "3-5 months",
      complexity: "Medium",
      uiComponent: true
    }
      
      
      ];

const categoriesList = [
  { id: 'ml', name: 'Machine Learning & AI', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg>' },
  { id: 'iot', name: 'IoT & Edge Security', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>' },
  { id: 'blockchain', name: 'Blockchain & Cryptography', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>' },
  { id: 'network', name: 'Network & Cloud Security', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z"></path><path d="M12 4V2"></path></svg>' },
  { id: 'mobile', name: 'Mobile & App Security', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>' },
  { id: 'forensics', name: 'Privacy & Digital Forensics', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' },
  { id: 'emerging', name: 'Emerging Technologies', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>' },
  { id: 'human', name: 'Human-Centric Security', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21v-2a7 7 0 0 0-14 0v2"></path></svg>' },
  { id: 'secure_mgmt', name: 'Secure Management System', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>' },
  { id: 'zkp', name: 'Zero Knowledge Proof', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12v-1a3 3 0 1 1 6 0v1"></path><path d="M3 12h12"></path><circle cx="12" cy="12" r="10"></circle></svg>' },
  { id: 'tools_design', name: 'Cybersecurity Tools Design', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3"></circle><path d="M2 8h2M12 8h2M8 2v2M8 12v2M3.5 3.5l1.4 1.4M11.1 11.1l1.4 1.4M3.5 12.5l1.4-1.4M11.1 4.9l1.4-1.4"></path></svg>' }
];

const skillLevelsList = [
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" }
];

const technologiesList = [
  { id: "python", name: "Python" },
  { id: "ml_frameworks", name: "ML Frameworks" },
  { id: "javascript", name: "JavaScript/Web" },
  { id: "cloud", name: "Cloud Services" },
  { id: "databases", name: "Databases" },
  { id: "mobile_dev", name: "Mobile Development" }
];

// Variables for filtering and selection
let selectedCategories = [];
let selectedSkillLevels = [];
let selectedTechnologies = [];
let searchTerm = "";
let selectedProject = null;

/**************************************
 * Firebase integration functions
 **************************************/
function saveSubmissionToFirebase(submission) {
  return db.collection("groupSubmissions").add(submission);
}

function loadSubmissionsFromFirebase() {
  return db.collection("groupSubmissions").orderBy("timestamp", "desc").get()
    .then((querySnapshot) => {
      const submissions = [];
      querySnapshot.forEach((doc) => {
        submissions.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return submissions;
    });
}

function deleteSubmissionFromFirebase(submissionId) {
  return db.collection("groupSubmissions").doc(submissionId).delete();
}

// Add the new function here
function updateSubmissionInFirebase(submissionId, updatedData) {
  return db.collection("groupSubmissions").doc(submissionId).update(updatedData);
}

/**************************************
 * Initialization and Tab Switching
 **************************************/
document.addEventListener("DOMContentLoaded", function () {
  // Set up navigation tabs
  document.getElementById("tab-projects").addEventListener("click", function (e) {
    e.preventDefault();
    setActiveTab("tab-projects");
    renderProjectsView();
  });
  document.getElementById("tab-submissions").addEventListener("click", function (e) {
    e.preventDefault();
    setActiveTab("tab-submissions");
    renderSubmissionsView();
  });

  // Start with the Projects view
  renderProjectsView();
});

function setActiveTab(tabId) {
  document.querySelectorAll(".nav-tabs a").forEach(function (link) {
    link.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

/**************************************
 * Render Views
 **************************************/
// Render the Projects view (with filters and project list)
function renderProjectsView() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
    <div class="main-content">
      <div class="sidebar" id="sidebar-filters">
        <div class="filter-section">
          <h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Search
          </h2>
          <input type="text" id="search-input" placeholder="Search projects..." />
        </div>
        <div class="filter-section">
          <h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            Categories
          </h2>
          <div class="filter-options" id="category-filters"></div>
        </div>
        <div class="filter-section">
          <h2>Skill Level</h2>
          <div class="filter-options" id="skill-filters"></div>
        </div>
        <div class="filter-section">
          <h2>Technologies</h2>
          <div class="filter-options" id="tech-filters"></div>
        </div>
      </div>
      <div class="project-list" id="project-container"></div>
    </div>
  `;
  initProjects();
}

// Render the Group Submissions view with Firebase integration
function renderSubmissionsView() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
    <div class="group-submissions">
      <h2>Group Submissions</h2>
      <button class="export-btn" onclick="exportSubmissions()">Export as CSV</button>
      <div id="submissions-container">
        <div class="loading">Loading submissions...</div>
      </div>
    </div>
  `;

  html += `<div class="group-card">
          <h3>Submission ${index + 1}</h3>
          <p><strong>Project Name:</strong> ${group.projectName}</p>
          <p><strong>Group Name:</strong> ${group.groupName || `Group for ${group.projectName}`}</p>
          <p><strong>Group Members:</strong></p>
          <ul>`;
group.groupMembers.forEach(function (member) {
  html += `<li>${member.name} (ID: ${member.studentId})</li>`;
});
html += `</ul>
          <p><small>Submitted on: ${new Date(group.timestamp).toLocaleString()}</small></p>
          <div class="button-group">
            <button class="edit-btn" onclick="editGroupSubmission('${group.id}')">Edit Group</button>
            <button class="delete-btn" onclick="removeGroupSubmission('${group.id}', ${index})">Remove Group</button>
          </div>
        </div>`;

  // Load submissions from Firebase
  loadSubmissionsFromFirebase()
    .then((submissions) => {
      // Update our global array
      groupSubmissions = submissions;
      
      // Also update localStorage as backup
      localStorage.setItem("groupSubmissions", JSON.stringify(groupSubmissions));
      
      // Render the submissions
      const container = document.getElementById("submissions-container");
      
      if (submissions.length === 0) {
        container.innerHTML = `<p>No group submissions yet.</p>`;
      } else {
        let html = '';
        submissions.forEach(function (group, index) {
          html += `<div class="group-card">
                    <h3>Submission ${index + 1}</h3>
                    <p><strong>Project Name:</strong> ${group.projectName}</p>
                    <p><strong>Group Name:</strong> ${group.groupName || `Group for ${group.projectName}`}</p>
                    <p><strong>Group Members:</strong></p>
                    <ul>`;
          group.groupMembers.forEach(function (member) {
            html += `<li>${member.name} (ID: ${member.studentId})</li>`;
          });
          html += `</ul>
                    <p><small>Submitted on: ${new Date(group.timestamp).toLocaleString()}</small></p>
                    <button class="delete-btn" onclick="removeGroupSubmission('${group.id}', ${index})">Remove Group</button>
                  </div>`;
        });
        container.innerHTML = html;
      }
    })
    .catch((error) => {
      console.error("Error loading submissions:", error);
      document.getElementById("submissions-container").innerHTML = 
        `<div class="error">Error loading submissions: ${error.message}. Please try again.</div>`;
    });
}

/**************************************
 * Projects Functionality
 **************************************/
function initProjects() {
  // Reset selections
  selectedCategories = [];
  selectedSkillLevels = [];
  selectedTechnologies = [];
  searchTerm = "";
  selectedProject = null;

  populateFilterOptions();
  document.getElementById("search-input").addEventListener("input", handleSearch);
  renderProjectList();
}

function populateFilterOptions() {
  // Categories
  const catContainer = document.getElementById("category-filters");
  catContainer.innerHTML = "";
  categoriesList.forEach(function (category) {
    const option = document.createElement("div");
    option.className = "filter-option";
    option.innerHTML = `
      <input type="checkbox" id="category-${category.id}" data-category="${category.id}">
      <label for="category-${category.id}">${category.icon} ${category.name}</label>
    `;
    catContainer.appendChild(option);
    const checkbox = option.querySelector(`#category-${category.id}`);
    checkbox.addEventListener("change", function () {
      toggleCategory(category.id);
    });
  });

  // Skill Levels
  const skillContainer = document.getElementById("skill-filters");
  skillContainer.innerHTML = "";
  skillLevelsList.forEach(function (level) {
    const option = document.createElement("div");
    option.className = "filter-option";
    option.innerHTML = `
      <input type="checkbox" id="skill-${level.id}" data-skill="${level.id}">
      <label for="skill-${level.id}">${level.name}</label>
    `;
    skillContainer.appendChild(option);
    const checkbox = option.querySelector(`#skill-${level.id}`);
    checkbox.addEventListener("change", function () {
      toggleSkillLevel(level.id);
    });
  });

  // Technologies
  const techContainer = document.getElementById("tech-filters");
  techContainer.innerHTML = "";
  technologiesList.forEach(function (tech) {
    const option = document.createElement("div");
    option.className = "filter-option";
    option.innerHTML = `
      <input type="checkbox" id="tech-${tech.id}" data-tech="${tech.id}">
      <label for="tech-${tech.id}">${tech.name}</label>
    `;
    techContainer.appendChild(option);
    const checkbox = option.querySelector(`#tech-${tech.id}`);
    checkbox.addEventListener("change", function () {
      toggleTechnology(tech.id);
    });
  });
}

function handleSearch(e) {
  searchTerm = e.target.value.toLowerCase();
  renderProjectList();
}

function toggleCategory(categoryId) {
  if (selectedCategories.includes(categoryId)) {
    selectedCategories = selectedCategories.filter(function (id) {
      return id !== categoryId;
    });
  } else {
    selectedCategories.push(categoryId);
  }
  renderProjectList();
}

function toggleSkillLevel(skillLevelId) {
  if (selectedSkillLevels.includes(skillLevelId)) {
    selectedSkillLevels = selectedSkillLevels.filter(function (id) {
      return id !== skillLevelId;
    });
  } else {
    selectedSkillLevels.push(skillLevelId);
  }
  renderProjectList();
}

function toggleTechnology(technologyId) {
  if (selectedTechnologies.includes(technologyId)) {
    selectedTechnologies = selectedTechnologies.filter(function (id) {
      return id !== technologyId;
    });
  } else {
    selectedTechnologies.push(technologyId);
  }
  renderProjectList();
}

function filterProjects() {
  let filtered = projects.slice();
  if (searchTerm) {
    filtered = filtered.filter(function (project) {
      return (
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm)
      );
    });
  }
  if (selectedCategories.length > 0) {
    filtered = filtered.filter(function (project) {
      return selectedCategories.includes(project.category);
    });
  }
  if (selectedSkillLevels.length > 0) {
    filtered = filtered.filter(function (project) {
      return selectedSkillLevels.includes(project.skillLevel);
    });
  }
  if (selectedTechnologies.length > 0) {
    filtered = filtered.filter(function (project) {
      return project.technologies.some(function (tech) {
        return selectedTechnologies.includes(tech);
      });
    });
  }
  return filtered;
}

function renderProjectList() {
  if (selectedProject) {
    renderProjectDetails();
    return;
  }
  const container = document.getElementById("project-container");
  container.innerHTML = "";
  const filteredProjects = filterProjects();

  const listHeader = document.createElement("div");
  listHeader.className = "list-header";
  listHeader.innerHTML = `<h2>Available Projects (${filteredProjects.length})</h2>`;
  container.appendChild(listHeader);

  filteredProjects.forEach(function (project) {
    const card = document.createElement("div");
    card.className = "project-card";
    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const projectTitle = document.createElement("h3");
    projectTitle.className = "project-title";
    projectTitle.textContent = project.title;

    const projectDesc = document.createElement("p");
    projectDesc.className = "project-description";
    projectDesc.textContent = project.description;

    const tagsDiv = document.createElement("div");
    tagsDiv.className = "tags";
    project.techNames.forEach(function (techName) {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = techName;
      tagsDiv.appendChild(tag);
    });

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";

    const metaDiv = document.createElement("div");
    metaDiv.className = "metadata";
    const resourceMeta = document.createElement("div");
    resourceMeta.className = "meta-tag resources";
    resourceMeta.innerHTML = `<span style="margin-right:4px;">📚</span>${project.resources.length} Resources`;
    metaDiv.appendChild(resourceMeta);

    const skillMeta = document.createElement("div");
    skillMeta.className = `meta-tag ${project.skillLevel}`;
    skillMeta.textContent =
      project.skillLevel.charAt(0).toUpperCase() + project.skillLevel.slice(1);
    metaDiv.appendChild(skillMeta);

    cardFooter.appendChild(metaDiv);

    const viewButton = document.createElement("button");
    viewButton.className = "view-btn";
    viewButton.textContent = "View Details";
    viewButton.addEventListener("click", function () {
      selectedProject = project;
      console.log("Project selected:", selectedProject.title);
      renderProjectList();
    });
    cardFooter.appendChild(viewButton);

    cardContent.appendChild(projectTitle);
    cardContent.appendChild(projectDesc);
    cardContent.appendChild(tagsDiv);
    cardContent.appendChild(cardFooter);
    card.appendChild(cardContent);
    container.appendChild(card);
  });

  if (filteredProjects.length === 0) {
    const noProjectsDiv = document.createElement("div");
    noProjectsDiv.className = "no-projects";
    noProjectsDiv.innerHTML =
      "<p>No projects match your current filters. Try adjusting your criteria.</p>";
    container.appendChild(noProjectsDiv);
  }
}

function renderProjectDetails() {
  const container = document.getElementById("project-container");
  container.innerHTML = "";
  const detailsDiv = document.createElement("div");
  detailsDiv.className = "project-details";

  const detailsHeader = document.createElement("div");
  detailsHeader.className = "details-header";

  const title = document.createElement("h2");
  title.className = "details-title";
  title.textContent = selectedProject.title;

  const backButton = document.createElement("button");
  backButton.className = "back-btn";
  backButton.textContent = "Back to List";
  backButton.addEventListener("click", function () {
    selectedProject = null;
    renderProjectList();
  });

  detailsHeader.appendChild(title);
  detailsHeader.appendChild(backButton);
  detailsDiv.appendChild(detailsHeader);

  const statsDiv = document.createElement("div");
  statsDiv.className = "project-stats";

  const stat1 = document.createElement("div");
  stat1.className = "stat-card";
  stat1.innerHTML = `<div class="stat-title">Estimated Time</div><div>${selectedProject.estimatedTime}</div>`;

  const stat2 = document.createElement("div");
  stat2.className = "stat-card";
  stat2.innerHTML = `<div class="stat-title">Complexity</div><div>${selectedProject.complexity}</div>`;

  const stat3 = document.createElement("div");
  stat3.className = "stat-card";
  stat3.innerHTML = `<div class="stat-title">UI Component</div><div>${selectedProject.uiComponent ? "Yes" : "No"}</div>`;

  statsDiv.appendChild(stat1);
  statsDiv.appendChild(stat2);
  statsDiv.appendChild(stat3);
  detailsDiv.appendChild(statsDiv);

  // Detailed description section
  const descSection = document.createElement("div");
  descSection.className = "details-section";
  const descHeading = document.createElement("h3");
  descHeading.textContent = "Description";
  const descParagraph = document.createElement("p");
  descParagraph.textContent =
    selectedProject.detailedDescription || selectedProject.description;
  descSection.appendChild(descHeading);
  descSection.appendChild(descParagraph);
  detailsDiv.appendChild(descSection);

  // Contribution suggestions (if any)
  if (selectedProject.contributionSuggestions) {
    const contribSection = document.createElement("div");
    contribSection.className = "details-section";
    const contribHeading = document.createElement("h3");
    contribHeading.textContent = "Contribution Suggestions";
    const contribParagraph = document.createElement("p");
    contribParagraph.textContent = selectedProject.contributionSuggestions;
    contribSection.appendChild(contribHeading);
    contribSection.appendChild(contribParagraph);
    detailsDiv.appendChild(contribSection);
  }

  // Prerequisites
  if (selectedProject.prerequisites && selectedProject.prerequisites.length > 0) {
    const prereqSection = document.createElement("div");
    prereqSection.className = "details-section";
    const prereqHeading = document.createElement("h3");
    prereqHeading.textContent = "Prerequisites";
    prereqSection.appendChild(prereqHeading);
    const prereqList = document.createElement("ul");
    selectedProject.prerequisites.forEach(function (prereq) {
      const li = document.createElement("li");
      li.textContent = prereq;
      prereqList.appendChild(li);
    });
    prereqSection.appendChild(prereqList);
    detailsDiv.appendChild(prereqSection);
  }

  // Resources
  if (selectedProject.resources && selectedProject.resources.length > 0) {
    const resourceSection = document.createElement("div");
    resourceSection.className = "details-section";
    const resourceHeading = document.createElement("h3");
    resourceHeading.textContent = "Resources";
    resourceSection.appendChild(resourceHeading);
    const resourceList = document.createElement("ul");
    selectedProject.resources.forEach(function (resource) {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${resource.url}" target="_blank">${resource.name}</a>`;
      resourceList.appendChild(li);
    });
    resourceSection.appendChild(resourceList);
    detailsDiv.appendChild(resourceSection);
  }

  // Research Articles
  if (selectedProject.researchArticles && selectedProject.researchArticles.length > 0) {
    const researchSection = document.createElement("div");
    researchSection.className = "details-section";
    const researchHeading = document.createElement("h3");
    researchHeading.textContent = "Research Articles";
    researchSection.appendChild(researchHeading);
    const researchList = document.createElement("ul");
    selectedProject.researchArticles.forEach(function (article) {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${article.url}" target="_blank">${article.name}</a>`;
      researchList.appendChild(li);
    });
    researchSection.appendChild(researchList);
    detailsDiv.appendChild(researchSection);
  }

  // Research Report Structure
  const reportSection = document.createElement("div");
  reportSection.className = "details-section";
  const reportHeading = document.createElement("h3");
  reportHeading.textContent = "Research Report Structure & Guidelines";
  reportSection.appendChild(reportHeading);
  const reportList = document.createElement("ul");
  const reportStructure = [
    {
        section: "Research Questions",
        hint: "Define clear and focused questions. Identify the problem you are addressing, the gaps in existing research, and the objectives of your study."
      },
      {
        section: "Abstract",
        hint: "Summarize your entire project in 150-250 words. Include the problem, methods, key results, and contributions."
      },
      {
        section: "Introduction",
        hint: "Provide background on your topic, explain its importance, and state your research questions. Introduce the structure of your report."
      },
      {
        section: "Literature Review",
        hint: "Review existing research and theories relevant to your topic. Highlight the gaps your research aims to fill."
      },
      {
        section: "Methodology",
        hint: "Describe your research methods and approaches in detail. Explain data collection, analysis techniques, and any models used."
      },
      {
        section: "Implementation",
        hint: "Detail your system design, tools used, and step-by-step development process. Include diagrams or code snippets as needed."
      },
      {
        section: "Results and Analysis",
        hint: "Present your findings using graphs, tables, and statistical metrics. Compare your results with previous studies."
      },
      {
        section: "Testing and Evaluation",
        hint: "Describe your testing methodologies including unit tests, integration tests, and user testing. Discuss performance and limitations."
      },
      {
        section: "Graphical User Interface (GUI)",
        hint: "Explain your UI design and usability features. Include screenshots and discuss how the interface supports the overall system."
      },
      {
        section: "Conclusion and Future Work",
        hint: "Summarize your contributions, discuss the limitations of your work, and propose directions for future research."
      }
  ];
  reportStructure.forEach(function (item) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.section}:</strong> ${item.hint}`;
    reportList.appendChild(li);
  });
  reportSection.appendChild(reportList);
  detailsDiv.appendChild(reportSection);

  // "Select This Project" button to open the group formation modal
  const selectBtn = document.createElement("button");
  selectBtn.className = "select-project-btn";
  selectBtn.textContent = "Select This Project";
  // Attach click event to open the modal
  selectBtn.addEventListener("click", openContactForm);
  detailsDiv.appendChild(selectBtn);

  container.appendChild(detailsDiv);
}

/**************************************
 * Modal and Group Form Handling
 **************************************/
function openContactForm() {
  if (!selectedProject) {
    console.error("No project selected!");
    return;
  }
  console.log("Opening modal for project:", selectedProject.title);
  
  // Pre-fill the project name field with the selected project title
  document.getElementById("project-name").value = selectedProject.title;
  
  // Show the modal
  document.getElementById("group-form-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("group-form-modal").style.display = "none";
  document.getElementById("group-form").reset();
}

// Close modal when clicking outside modal content
window.addEventListener("click", function (event) {
  const modal = document.getElementById("group-form-modal");
  if (event.target === modal) {
    closeModal();
  }
});

// Close button event
document.querySelector("#group-form-modal .close").addEventListener("click", closeModal);

// Handle group formation form submission with Firebase
document.getElementById("group-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const projectName = document.getElementById("project-name").value;
  
  // Collect group members info
  const groupMembers = [];
  for (let i = 1; i <= 5; i++) {
    const nameVal = document.getElementById(`member${i}-name`).value.trim();
    const idVal = document.getElementById(`member${i}-id`).value.trim();
    if (i === 1) {
      if (nameVal === "" || idVal === "") {
        alert("Member 1 is required with both name and ID.");
        return;
      } else {
        groupMembers.push({ name: nameVal, studentId: idVal });
      }
    } else {
      if (nameVal !== "" && idVal !== "") {
        groupMembers.push({ name: nameVal, studentId: idVal });
      }
    }
  }

  // Create submission object
  const submission = {
    projectName: projectName,
    groupName: `Group for ${projectName}`,
    groupMembers: groupMembers,
    timestamp: new Date().toISOString()
  };

  // Show loading indicator
  const submitButton = this.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  // Save to Firebase
 // Save to Firebase
 saveSubmissionToFirebase(submission)
 .then((docRef) => {
   // Also save to localStorage as a backup
   submission.id = docRef.id; // Add the Firebase document ID
   groupSubmissions.push(submission);
   localStorage.setItem("groupSubmissions", JSON.stringify(groupSubmissions));
   
   alert("Your group has been formed and saved.");
   closeModal();
 })
 .catch((error) => {
   console.error("Error saving to Firebase:", error);
   alert("There was an error submitting your group. Please try again.");
 })
 .finally(() => {
   // Restore button
   submitButton.disabled = false;
   submitButton.textContent = originalText;
 });
});

/**************************************
* Group Removal Function
**************************************/
function removeGroupSubmission(submissionId, index) {
if (!confirm("Are you sure you want to remove this group submission?")) {
 return;
}

// Show removal in progress
const deleteButton = event.target;
deleteButton.disabled = true;
deleteButton.textContent = "Removing...";

// Delete from Firebase
deleteSubmissionFromFirebase(submissionId)
 .then(() => {
   // Also update local data
   groupSubmissions.splice(index, 1);
   localStorage.setItem("groupSubmissions", JSON.stringify(groupSubmissions));
   
   // Refresh the view
   renderSubmissionsView();
 })
 .catch((error) => {
   console.error("Error removing submission:", error);
   alert("Error removing submission: " + error.message);
   deleteButton.disabled = false;
   deleteButton.textContent = "Remove Group";
 });
}

/**************************************
* Export Group Submissions as CSV
**************************************/
function exportSubmissions() {
if (groupSubmissions.length === 0) {
 alert("No submissions to export.");
 return;
}
let csvContent = "data:text/csv;charset=utf-8,";
csvContent += "Project Name,Group Name,Member 1,Member 1 ID,Member 2,Member 2 ID,Member 3,Member 3 ID,Member 4,Member 4 ID,Member 5,Member 5 ID,Timestamp\n";

groupSubmissions.forEach(function (submission) {
 const row = [];
 row.push('"' + submission.projectName + '"');
 row.push('"' + (submission.groupName || `Group for ${submission.projectName}`) + '"');
 for (let i = 0; i < 5; i++) {
   if (submission.groupMembers[i]) {
     row.push('"' + submission.groupMembers[i].name + '"');
     row.push('"' + submission.groupMembers[i].studentId + '"');
   } else {
     row.push('""');
     row.push('""');
   }
 }
 row.push('"' + new Date(submission.timestamp).toLocaleString() + '"');
 csvContent += row.join(",") + "\n";
});

const encodedUri = encodeURI(csvContent);
const link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "group_submissions.csv");
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}


function editGroupSubmission(submissionId) {
  // Find the submission in the array
  const submission = groupSubmissions.find(sub => sub.id === submissionId);
  if (!submission) {
    alert("Submission not found!");
    return;
  }
  
  // Pre-fill the form with existing data
  document.getElementById("project-name").value = submission.projectName;
  
  // Fill in the group members data
  for (let i = 1; i <= 5; i++) {
    if (submission.groupMembers[i-1]) {
      document.getElementById(`member${i}-name`).value = submission.groupMembers[i-1].name;
      document.getElementById(`member${i}-id`).value = submission.groupMembers[i-1].studentId;
    } else {
      document.getElementById(`member${i}-name`).value = "";
      document.getElementById(`member${i}-id`).value = "";
    }
  }
  
  // Update the form submission handler to handle updates
  const form = document.getElementById("group-form");
  
  // Remove previous event listeners
  const oldForm = form.cloneNode(true);
  form.parentNode.replaceChild(oldForm, form);
  
  // Add new event listener for edit mode
  oldForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Collect updated data
    const projectName = document.getElementById("project-name").value;
    const groupMembers = [];
    
    for (let i = 1; i <= 5; i++) {
      const nameVal = document.getElementById(`member${i}-name`).value.trim();
      const idVal = document.getElementById(`member${i}-id`).value.trim();
      if (i === 1) {
        if (nameVal === "" || idVal === "") {
          alert("Member 1 is required with both name and ID.");
          return;
        } else {
          groupMembers.push({ name: nameVal, studentId: idVal });
        }
      } else {
        if (nameVal !== "" && idVal !== "") {
          groupMembers.push({ name: nameVal, studentId: idVal });
        }
      }
    }
    
    // Prepare updated data
    const updatedData = {
      projectName: projectName,
      groupName: `Group for ${projectName}`,
      groupMembers: groupMembers,
      // Don't update the timestamp to preserve the original submission time
    };
    
    // Show loading indicator
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Updating...";
    
    // Update in Firebase
    updateSubmissionInFirebase(submissionId, updatedData)
      .then(() => {
        // Update local data
        const index = groupSubmissions.findIndex(sub => sub.id === submissionId);
        if (index !== -1) {
          groupSubmissions[index] = { 
            ...groupSubmissions[index], 
            ...updatedData 
          };
          localStorage.setItem("groupSubmissions", JSON.stringify(groupSubmissions));
        }
        
        alert("Group information updated successfully!");
        closeModal();
        
        // Refresh the view
        renderSubmissionsView();
        
        // Reset the form handler
        setupFormHandler();
      })
      .catch((error) => {
        console.error("Error updating submission:", error);
        alert("Error updating group information: " + error.message);
      })
      .finally(() => {
        // Restore button
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      });
  });
  
  // Show the modal with prefilled data
  document.getElementById("group-form-modal").style.display = "block";
  
  // Update modal title for editing
  document.querySelector("#group-form-modal h2").textContent = "Edit Group Information";
  
  // Update submit button text
  document.querySelector("#group-form button[type='submit']").textContent = "Update Group";
}

// Function to setup the normal form handler (for new submissions)
function setupFormHandler() {
  const form = document.getElementById("group-form");
  
  // Remove previous event listeners
  const oldForm = form.cloneNode(true);
  form.parentNode.replaceChild(oldForm, form);
  
  // Reset modal title and button text
  document.querySelector("#group-form-modal h2").textContent = "Group Details Submission Form";
  document.querySelector("#group-form button[type='submit']").textContent = "Submit Group Registration";
  
  // Add event listener for new submissions
  oldForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // Original submission code...
    
    // Same code as before for submitting a new group
    const projectName = document.getElementById("project-name").value;
    
    // Collect group members info
    const groupMembers = [];
    for (let i = 1; i <= 5; i++) {
      const nameVal = document.getElementById(`member${i}-name`).value.trim();
      const idVal = document.getElementById(`member${i}-id`).value.trim();
      if (i === 1) {
        if (nameVal === "" || idVal === "") {
          alert("Member 1 is required with both name and ID.");
          return;
        } else {
          groupMembers.push({ name: nameVal, studentId: idVal });
        }
      } else {
        if (nameVal !== "" && idVal !== "") {
          groupMembers.push({ name: nameVal, studentId: idVal });
        }
      }
    }

    // Create submission object
    const submission = {
      projectName: projectName,
      groupName: `Group for ${projectName}`,
      groupMembers: groupMembers,
      timestamp: new Date().toISOString()
    };

    // Show loading indicator
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    // Save to Firebase
    saveSubmissionToFirebase(submission)
      .then((docRef) => {
        // Also save to localStorage as a backup
        submission.id = docRef.id; // Add the Firebase document ID
        groupSubmissions.push(submission);
        localStorage.setItem("groupSubmissions", JSON.stringify(groupSubmissions));
        
        alert("Your group has been formed and saved.");
        closeModal();
      })
      .catch((error) => {
        console.error("Error saving to Firebase:", error);
        alert("There was an error submitting your group. Please try again.");
      })
      .finally(() => {
        // Restore button
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      });
  });
}

// Call setupFormHandler during initialization
document.addEventListener("DOMContentLoaded", function() {
  // Your existing initialization code...
  setupFormHandler();
});