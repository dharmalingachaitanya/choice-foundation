/* ============================================================
   SNAP-IV 26-ITEM AUTOMATED ASSESSMENT SYSTEM
   ------------------------------------------------------------
   COMPLETE PRINT-READY VERSION
   ------------------------------------------------------------ */


/* ============================================================
   SNAP-IV ITEM STRUCTURE
   ============================================================ */

const snapItems = [

    {
        number: 1,
        domain: "Inattention",
        text: "Often fails to give close attention to details or makes careless mistakes."
    },
    {
        number: 2,
        domain: "Inattention",
        text: "Often has difficulty sustaining attention in tasks or activities."
    },
    {
        number: 3,
        domain: "Inattention",
        text: "Often does not seem to listen when spoken to directly."
    },
    {
        number: 4,
        domain: "Inattention",
        text: "Often does not follow through on instructions and fails to finish tasks."
    },
    {
        number: 5,
        domain: "Inattention",
        text: "Often has difficulty organizing tasks and activities."
    },
    {
        number: 6,
        domain: "Inattention",
        text: "Often avoids, dislikes, or is reluctant to engage in tasks requiring sustained mental effort."
    },
    {
        number: 7,
        domain: "Inattention",
        text: "Often loses things necessary for tasks or activities."
    },
    {
        number: 8,
        domain: "Inattention",
        text: "Often is easily distracted by extraneous stimuli."
    },
    {
        number: 9,
        domain: "Inattention",
        text: "Often is forgetful in daily activities."
    },

    {
        number: 10,
        domain: "Hyperactivity / Impulsivity",
        text: "Often fidgets with or taps hands or feet or squirms in seat."
    },
    {
        number: 11,
        domain: "Hyperactivity / Impulsivity",
        text: "Often leaves seat in situations when remaining seated is expected."
    },
    {
        number: 12,
        domain: "Hyperactivity / Impulsivity",
        text: "Often runs about or climbs in situations where it is inappropriate."
    },
    {
        number: 13,
        domain: "Hyperactivity / Impulsivity",
        text: "Often has difficulty playing or engaging in leisure activities quietly."
    },
    {
        number: 14,
        domain: "Hyperactivity / Impulsivity",
        text: "Is often on the go or acts as if driven by a motor."
    },
    {
        number: 15,
        domain: "Hyperactivity / Impulsivity",
        text: "Often talks excessively."
    },
    {
        number: 16,
        domain: "Hyperactivity / Impulsivity",
        text: "Often blurts out an answer before a question has been completed."
    },
    {
        number: 17,
        domain: "Hyperactivity / Impulsivity",
        text: "Often has difficulty waiting his or her turn."
    },
    {
        number: 18,
        domain: "Hyperactivity / Impulsivity",
        text: "Often interrupts or intrudes on others."
    },

    {
        number: 19,
        domain: "Opposition / Defiance",
        text: "Often loses temper."
    },
    {
        number: 20,
        domain: "Opposition / Defiance",
        text: "Often argues with adults."
    },
    {
        number: 21,
        domain: "Opposition / Defiance",
        text: "Often actively defies or refuses to comply with adults' requests or rules."
    },
    {
        number: 22,
        domain: "Opposition / Defiance",
        text: "Often deliberately annoys people."
    },
    {
        number: 23,
        domain: "Opposition / Defiance",
        text: "Often blames others for his or her mistakes or misbehavior."
    },
    {
        number: 24,
        domain: "Opposition / Defiance",
        text: "Is often touchy or easily annoyed by others."
    },
    {
        number: 25,
        domain: "Opposition / Defiance",
        text: "Is often angry and resentful."
    },
    {
        number: 26,
        domain: "Opposition / Defiance",
        text: "Is often spiteful and vindictive."
    }

];


/* ============================================================
   RESPONSE OPTIONS
   ============================================================ */

const responseOptions = [

    {
        value: 0,
        label: "Not at all"
    },
    {
        value: 1,
        label: "Just a little"
    },
    {
        value: 2,
        label: "Quite a bit"
    },
    {
        value: 3,
        label: "Very much"
    }

];


/* ============================================================
   DOMAIN INFORMATION
   ============================================================ */

const domainInformation = {

    "Inattention": {
        title: "INATTENTION",
        subtitle:
            "Items 1–9 • Attention and concentration-related symptoms"
    },

    "Hyperactivity / Impulsivity": {
        title: "HYPERACTIVITY / IMPULSIVITY",
        subtitle:
            "Items 10–18 • Activity level and impulse-control symptoms"
    },

    "Opposition / Defiance": {
        title: "OPPOSITION / DEFIANCE (ODD)",
        subtitle:
            "Items 19–26 • Oppositional and defiant behaviours"
    }

};


/* ============================================================
   GENERATE ASSESSMENT ITEMS
   ============================================================ */

function generateItems() {

    const container =
        document.getElementById("itemsContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    let currentDomain = "";

    snapItems.forEach(function(item) {

        if (item.domain !== currentDomain) {

            currentDomain = item.domain;

            const domain =
                domainInformation[currentDomain];

            const domainHeader =
                document.createElement("div");

            domainHeader.className =
                "domain-section-header";

            domainHeader.innerHTML = `

                <div class="domain-title">
                    ${domain.title}
                </div>

                <div class="domain-subtitle">
                    ${domain.subtitle}
                </div>

            `;

            container.appendChild(domainHeader);

        }


        const itemDiv =
            document.createElement("div");

        itemDiv.className =
            "assessment-item";

        itemDiv.id =
            "item-" + item.number;


        const itemNumber =
            document.createElement("div");

        itemNumber.className =
            "item-number";

        itemNumber.textContent =
            "Item " + item.number;


        const textDiv =
            document.createElement("div");

        textDiv.className =
            "item-text";

        textDiv.textContent =
            item.text;


        const optionsDiv =
            document.createElement("div");

        optionsDiv.className =
            "response-options";


        responseOptions.forEach(function(option) {

            const label =
                document.createElement("label");

            label.className =
                "response-option";


            const radio =
                document.createElement("input");

            radio.type =
                "radio";

            radio.name =
                "snapItem_" + item.number;

            radio.value =
                option.value;


            radio.addEventListener(
                "change",
                function() {

                    updateSelectedStyle(
                        item.number
                    );

                    updateProgress();

                }
            );


            const responseText =
                document.createElement("span");

            responseText.textContent =
                option.label;


            label.appendChild(radio);
            label.appendChild(responseText);
            optionsDiv.appendChild(label);

        });


        itemDiv.appendChild(itemNumber);
        itemDiv.appendChild(textDiv);
        itemDiv.appendChild(optionsDiv);

        container.appendChild(itemDiv);

    });


    updateProgress();

}


/* ============================================================
   HIGHLIGHT SELECTED RESPONSE
   ============================================================ */

function updateSelectedStyle(itemNumber) {

    const item =
        document.getElementById(
            "item-" + itemNumber
        );

    if (!item) {
        return;
    }

    const options =
        item.querySelectorAll(
            ".response-option"
        );

    options.forEach(function(option) {

        const radio =
            option.querySelector("input");

        if (radio.checked) {
            option.classList.add("selected");
        } else {
            option.classList.remove("selected");
        }

    });

}


/* ============================================================
   PROGRESS TRACKING
   ============================================================ */

function updateProgress() {

    let answered = 0;

    snapItems.forEach(function(item) {

        const selected =
            document.querySelector(
                'input[name="snapItem_' +
                item.number +
                '"]:checked'
            );

        if (selected) {
            answered++;
        }

    });


    const progressText =
        document.getElementById("progressText");

    if (progressText) {

        progressText.textContent =
            answered + " / 26 answered";

    }


    const progressBar =
        document.getElementById("progressBar");

    if (progressBar) {

        const percentage =
            (answered / 26) * 100;

        progressBar.style.width =
            percentage + "%";

    }

}


/* ============================================================
   CALCULATE SCORES
   ============================================================ */

function calculateScores() {

    const unansweredItems = [];

    snapItems.forEach(function(item) {

        const selected =
            document.querySelector(
                'input[name="snapItem_' +
                item.number +
                '"]:checked'
            );

        if (!selected) {

            unansweredItems.push(
                item.number
            );

        }

    });


    if (unansweredItems.length > 0) {

        highlightUnanswered(
            unansweredItems
        );

        alert(
            "Please complete all 26 items before calculating scores.\n\n" +
            "Unanswered items: " +
            unansweredItems.join(", ")
        );

        return;

    }


    clearUnansweredHighlights();


    let inattentionScore = 0;
    let hyperactivityScore = 0;
    let oppositionScore = 0;


    snapItems.forEach(function(item) {

        const selected =
            document.querySelector(
                'input[name="snapItem_' +
                item.number +
                '"]:checked'
            );

        if (!selected) {
            return;
        }

        const score =
            Number(selected.value);


        if (
            item.number >= 1 &&
            item.number <= 9
        ) {

            inattentionScore += score;

        }

        else if (
            item.number >= 10 &&
            item.number <= 18
        ) {

            hyperactivityScore += score;

        }

        else if (
            item.number >= 19 &&
            item.number <= 26
        ) {

            oppositionScore += score;

        }

    });


    const inattentionMean =
        inattentionScore / 9;

    const hyperactivityMean =
        hyperactivityScore / 9;

    const oppositionMean =
        oppositionScore / 8;


    const snapTotalScore =
        inattentionScore +
        hyperactivityScore +
        oppositionScore;


    const inattentionSeverity =
        classifyADHDDomain(
            inattentionScore
        );

    const hyperactivitySeverity =
        classifyADHDDomain(
            hyperactivityScore
        );

    const oppositionSeverity =
        classifyOpposition(
            oppositionScore
        );


    setText(
        "inattentionScore",
        inattentionScore
    );

    setText(
        "inattentionMean",
        inattentionMean.toFixed(2)
    );

    setText(
        "inattentionSeverity",
        inattentionSeverity
    );


    setText(
        "hyperactivityScore",
        hyperactivityScore
    );

    setText(
        "hyperactivityMean",
        hyperactivityMean.toFixed(2)
    );

    setText(
        "hyperactivitySeverity",
        hyperactivitySeverity
    );


    setText(
        "oppositionScore",
        oppositionScore
    );

    setText(
        "oppositionMean",
        oppositionMean.toFixed(2)
    );

    setText(
        "oppositionSeverity",
        oppositionSeverity
    );


    setText(
        "snapTotalScore",
        snapTotalScore
    );


    generateInterpretation(
        inattentionSeverity,
        hyperactivitySeverity,
        oppositionSeverity
    );


    const resultsSection =
        document.getElementById(
            "resultsSection"
        );

    if (resultsSection) {

        resultsSection.classList.remove(
            "hidden"
        );

        resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* ============================================================
   SET TEXT HELPER
   ============================================================ */

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent = value;
    }

}


/* ============================================================
   ADHD DOMAIN CLASSIFICATION
   ============================================================ */

function classifyADHDDomain(score) {

    if (score <= 12) {
        return "Not clinically significant";
    }

    else if (score <= 17) {
        return "Mild";
    }

    else if (score <= 22) {
        return "Moderate";
    }

    else {
        return "Severe";
    }

}


/* ============================================================
   OPPOSITION / DEFIANCE CLASSIFICATION
   ============================================================ */

function classifyOpposition(score) {

    if (score <= 7) {
        return "Not clinically significant";
    }

    else if (score <= 13) {
        return "Mild";
    }

    else if (score <= 18) {
        return "Moderate";
    }

    else {
        return "Severe";
    }

}


/* ============================================================
   UNANSWERED ITEM HIGHLIGHTING
   ============================================================ */

function highlightUnanswered(items) {

    clearUnansweredHighlights();


    items.forEach(function(number) {

        const item =
            document.getElementById(
                "item-" + number
            );

        if (item) {

            item.classList.add(
                "unanswered"
            );

        }

    });


    const first =
        document.getElementById(
            "item-" + items[0]
        );

    if (first) {

        first.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


/* ============================================================
   CLEAR UNANSWERED HIGHLIGHTS
   ============================================================ */

function clearUnansweredHighlights() {

    document
        .querySelectorAll(
            ".assessment-item.unanswered"
        )
        .forEach(function(item) {

            item.classList.remove(
                "unanswered"
            );

        });

}


/* ============================================================
   PRELIMINARY INTERPRETATION
   ============================================================ */

function generateInterpretation(
    inattentionSeverity,
    hyperactivitySeverity,
    oppositionSeverity
) {

    const box =
        document.getElementById(
            "interpretationText"
        );

    if (!box) {
        return;
    }


    let html = "";


    html +=
        "<p><strong>Inattention:</strong> " +
        inattentionSeverity +
        " symptom level based on the obtained domain score.</p>";


    html +=
        "<p><strong>Hyperactivity / Impulsivity:</strong> " +
        hyperactivitySeverity +
        " symptom level based on the obtained domain score.</p>";


    html +=
        "<p><strong>Opposition / Defiance:</strong> " +
        oppositionSeverity +
        " symptom level based on the obtained domain score.</p>";


    html +=
        "<p class='clinical-note'>" +
        "SNAP-IV findings should be interpreted alongside " +
        "clinical history, functional impairment, developmental " +
        "information, and other relevant assessment findings. " +
        "The rating scale alone does not establish a diagnosis." +
        "</p>";


    box.innerHTML =
        html;

}


/* ============================================================
   GET FORM FIELD VALUE
   ============================================================ */

function getFieldValue(id) {

    const element =
        document.getElementById(id);

    if (!element) {
        return "";
    }

    return element.value.trim();

}


/* ============================================================
   GET TEXT FROM ELEMENT
   ============================================================ */

function getText(id) {

    const element =
        document.getElementById(id);

    if (!element) {
        return "";
    }

    return element.textContent.trim();

}


/* ============================================================
   FORMAT DATE
   ============================================================ */

function formatDate(dateString) {

    if (!dateString) {
        return "";
    }

    const parts =
        dateString.split("-");

    if (parts.length !== 3) {
        return dateString;
    }

    return (
        parts[2] +
        "-" +
        parts[1] +
        "-" +
        parts[0]
    );

}


/* ============================================================
   HTML ESCAPE
   ============================================================ */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ============================================================
   CHECK ELEVATION
   ============================================================ */

function isElevated(severity) {

    return (
        severity === "Mild" ||
        severity === "Moderate" ||
        severity === "Severe"
    );

}


/* ============================================================
   OVERALL FINDING
   ============================================================ */

function getOverallFinding(
    inattention,
    hyperactivity,
    opposition
) {

    const elevated = [];


    if (isElevated(inattention)) {

        elevated.push(
            "inattention"
        );

    }


    if (isElevated(hyperactivity)) {

        elevated.push(
            "hyperactivity/impulsivity"
        );

    }


    if (isElevated(opposition)) {

        elevated.push(
            "oppositional/defiant symptoms"
        );

    }


    if (elevated.length === 0) {

        return (
            "<strong>" +
            "No clinically significant elevation " +
            "</strong>across the assessed domains."
        );

    }


    return (
        "<strong>" +
        "Clinically significant elevation " +
        "</strong>in " +
        elevated.join(", ") +
        "."
    );

}


/* ============================================================
   CLINICAL IMPRESSION ENGINE
   ------------------------------------------------------------
   CASE-WISE INTERPRETATION ENGINE

   IMPORTANT:
   Replace the EXISTING buildClinicalImpression() function
   with this complete function.

   The interpretation:
   - Uses the specific pattern of elevated domains.
   - Uses "increased risk" / "associated difficulties" wording.
   - Does NOT diagnose ADHD.
   - Distinguishes ADHD-related patterns from predominantly
     oppositional/behavioural patterns.
   - Describes the likely functional significance of the
     reported symptom pattern.
   ============================================================ */

function buildClinicalImpression(
    inattention,
    hyperactivity,
    opposition
) {

    const inatt =
        isElevated(inattention);

    const hyper =
        isElevated(hyperactivity);

    const odd =
        isElevated(opposition);


    /* ========================================================
       CASE 1
       NO DOMAIN ELEVATION
       ======================================================== */

    if (!inatt && !hyper && !odd) {

        return `

            <p>
                The SNAP-IV rating profile does not demonstrate
                clinically significant elevation across the
                assessed domains. The current response pattern
                does not indicate a prominent level of reported
                inattention, hyperactivity/impulsivity, or
                oppositional/defiant behaviour.
            </p>

            <p>
                Based on the present screening profile, there is
                no clear indication of increased risk for
                ADHD-related difficulties on this measure.
                However, screening findings should be considered
                in relation to developmental history, academic
                functioning, behavioural observations, and
                concerns reported across relevant settings.
            </p>

        `;

    }


    /* ========================================================
       CASE 2
       INATTENTION + HYPERACTIVITY / IMPULSIVITY
       CLASSIC ADHD-RISK PATTERN
       ======================================================== */

    if (inatt && hyper && !odd) {

        return `

            <p>
                The SNAP-IV profile demonstrates elevation in both
                the <strong>inattention</strong> and
                <strong>hyperactivity/impulsivity</strong> domains.
                This pattern reflects difficulties involving
                sustained attention, distractibility, task
                completion, activity regulation, impulse control,
                and behavioural inhibition.
            </p>

            <p>
                The combined elevation can be considered
                <strong>indicative of increased risk for ADHD and
                its associated difficulties</strong>. Such a
                pattern may be associated with difficulties in
                maintaining attention during classroom activities,
                completing age-appropriate tasks, regulating
                activity level, waiting for turns, or controlling
                impulsive responses.
            </p>

            <p>
                The screening profile alone does not establish a
                diagnosis of ADHD. Further consideration should
                include symptom persistence, developmental onset,
                degree of functional impairment, and the presence
                of similar difficulties across relevant settings.
            </p>

        `;

    }


    /* ========================================================
       CASE 3
       INATTENTION + OPPOSITION / DEFIANCE
       ======================================================== */

    if (inatt && odd && !hyper) {

        return `

            <p>
                The SNAP-IV profile demonstrates elevation in
                <strong>inattention</strong> together with
                <strong>oppositional/defiant symptoms</strong>.
                This combination suggests that difficulties with
                attention, task engagement, following expectations,
                and behavioural regulation may be occurring
                together.
            </p>

            <p>
                The elevation in inattention can be considered
                <strong>indicative of increased risk for
                ADHD-associated attentional difficulties</strong>,
                while the accompanying oppositional symptoms
                indicate additional concerns related to compliance,
                irritability, argumentativeness, or response to
                adult demands.
            </p>

            <p>
                This pattern should not be interpreted as evidence
                of ADHD or a disruptive behaviour disorder on the
                basis of SNAP-IV findings alone. Further assessment
                should clarify whether behavioural difficulties are
                occurring independently or are emerging in response
                to task demands, frustration, academic difficulty,
                attentional problems, or other contextual factors.
            </p>

        `;

    }


    /* ========================================================
       CASE 4
       HYPERACTIVITY / IMPULSIVITY + OPPOSITION / DEFIANCE
       ======================================================== */

    if (hyper && odd && !inatt) {

        return `

            <p>
                The SNAP-IV profile demonstrates elevation in
                <strong>hyperactivity/impulsivity</strong> and
                <strong>oppositional/defiant symptoms</strong>,
                while inattention is comparatively less prominent.
                The reported pattern suggests difficulties involving
                activity regulation, impulse control, behavioural
                inhibition, compliance, and emotional or behavioural
                regulation.
            </p>

            <p>
                The hyperactive/impulsive elevation may be considered
                <strong>indicative of increased risk for
                ADHD-associated difficulties involving activity and
                impulse regulation</strong>. The accompanying
                oppositional symptoms may further affect interactions
                with adults, adherence to expectations, and behavioural
                functioning.
            </p>

            <p>
                The pattern does not by itself establish ADHD or an
                oppositional disorder. Further assessment is warranted
                to clarify developmental history, behavioural triggers,
                functional impairment, and whether the reported
                difficulties are consistent across settings.
            </p>

        `;

    }


    /* ========================================================
       CASE 5
       ALL THREE DOMAINS ELEVATED
       ======================================================== */

    if (inatt && hyper && odd) {

        return `

            <p>
                The SNAP-IV profile demonstrates elevation across
                <strong>inattention, hyperactivity/impulsivity, and
                oppositional/defiant domains</strong>. This represents
                a broad pattern of reported difficulties involving
                attention regulation, activity level, impulse control,
                behavioural inhibition, compliance, and emotional
                or behavioural regulation.
            </p>

            <p>
                The combined inattention and
                hyperactivity/impulsivity elevations can be considered
                <strong>indicative of increased risk for ADHD and its
                associated difficulties</strong>. The additional
                oppositional elevation suggests that behavioural
                regulation and compliance difficulties may also be
                contributing to functional challenges at home, school,
                or in interpersonal situations.
            </p>

            <p>
                Given the breadth of the reported difficulties,
                comprehensive clinical assessment is particularly
                important to clarify the developmental course,
                functional impairment, contextual factors, and the
                relationship between attentional, behavioural, and
                emotional regulation difficulties. The SNAP-IV
                screening profile alone does not establish a
                diagnosis.
            </p>

        `;

    }


    /* ========================================================
       CASE 6
       INATTENTION ONLY
       ======================================================== */

    if (inatt && !hyper && !odd) {

        return `

            <p>
                The SNAP-IV profile demonstrates elevation primarily
                in the <strong>inattention</strong> domain, with
                hyperactivity/impulsivity and oppositional symptoms
                comparatively less prominent. The reported pattern
                suggests difficulties involving sustained attention,
                distractibility, organization, remembering
                instructions, and completion of tasks.
            </p>

            <p>
                This elevation can be considered
                <strong>indicative of increased risk for
                ADHD-associated attentional difficulties</strong>,
                particularly where such concerns are persistent and
                interfere with academic, daily, or social functioning.
            </p>

            <p>
                Further clinical consideration should determine
                whether the reported attentional difficulties are
                persistent across settings and whether they may also
                be influenced by learning difficulties, emotional
                factors, sleep, environmental demands, or other
                developmental factors. The screening profile alone
                does not establish ADHD.
            </p>

        `;

    }


    /* ========================================================
       CASE 7
       HYPERACTIVITY / IMPULSIVITY ONLY
       ======================================================== */

    if (hyper && !inatt && !odd) {

        return `

            <p>
                The SNAP-IV profile demonstrates elevation primarily
                in the <strong>hyperactivity/impulsivity</strong>
                domain, while inattention and oppositional/defiant
                symptoms are comparatively less prominent. The
                reported pattern suggests difficulties involving
                activity regulation, waiting, impulse control,
                behavioural inhibition, and regulation of responses
                in structured situations.
            </p>

            <p>
                This elevation can be considered
                <strong>indicative of increased risk for
                ADHD-associated difficulties involving
                hyperactivity and impulsivity</strong>, particularly
                when these behaviours are persistent and interfere
                with functioning.
            </p>

            <p>
                Further assessment should clarify developmental
                history, situational consistency, functional impact,
                and whether the reported behaviours may be influenced
                by environmental, emotional, developmental, or other
                contextual factors. The SNAP-IV screening profile
                alone does not establish ADHD.
            </p>

        `;

    }


    /* ========================================================
       CASE 8
       OPPOSITION / DEFIANCE ONLY
       ======================================================== */

    if (odd && !inatt && !hyper) {

        return `

            <p>
                The SNAP-IV profile demonstrates elevation primarily
                in the <strong>oppositional/defiant</strong> domain,
                while inattention and hyperactivity/impulsivity are
                comparatively less prominent. The reported pattern
                may involve irritability, temper difficulties,
                argumentativeness, resistance to adult requests,
                blaming others, or difficulty complying with
                expectations.
            </p>

            <p>
                The present elevation indicates a clinically relevant
                pattern of behavioural and emotional regulation
                concerns. However, this pattern by itself does not
                indicate increased risk for ADHD, as the
                inattention and hyperactivity/impulsivity domains are
                not elevated.
            </p>

            <p>
                Further assessment may help clarify the circumstances
                in which these behaviours occur and their relationship
                with developmental, emotional, family, academic,
                interpersonal, or environmental factors. The SNAP-IV
                profile alone does not establish a diagnosis of
                oppositional or behavioural disorder.
            </p>

        `;

    }


    return "";

}


/* ============================================================
   RECOMMENDATION ENGINE
   ------------------------------------------------------------
   Replace the EXISTING buildRecommendations() function with
   this version.

   Recommendations are now linked to the actual elevation
   pattern while retaining the approved professional referral
   wording.
   ============================================================ */

function buildRecommendations(
    inattention,
    hyperactivity,
    opposition,
    anyElevation
) {

    let recommendations = "";


    /* ========================================================
       INATTENTION-SPECIFIC RECOMMENDATION
       ======================================================== */

    if (isElevated(inattention)) {

        recommendations += `

            <li>
                Provide structured attention and organizational
                support through brief and clearly stated
                instructions, task segmentation, visual prompts,
                reduced distractions, opportunities for
                clarification, and appropriate support for
                initiating and completing tasks.
            </li>

        `;

    }


    /* ========================================================
       HYPERACTIVITY / IMPULSIVITY-SPECIFIC RECOMMENDATION
       ======================================================== */

    if (isElevated(hyperactivity)) {

        recommendations += `

            <li>
                Use predictable routines, clearly defined
                behavioural expectations, planned movement
                opportunities, positive reinforcement, and
                strategies that support behavioural inhibition,
                self-monitoring, waiting, and impulse control.
            </li>

        `;

    }


    /* ========================================================
       OPPOSITION / DEFIANCE-SPECIFIC RECOMMENDATION
       ======================================================== */

    if (isElevated(opposition)) {

        recommendations += `

            <li>
                Behavioural support may focus on consistent
                expectations, clear and proportionate consequences,
                positive reinforcement, appropriate choices within
                defined limits, and Positive Behavior Support
                strategies to strengthen compliance, emotional
                regulation, and adaptive behaviour.
            </li>

        `;

    }


    /* ========================================================
       COMBINED INATTENTION + HYPERACTIVITY
       ======================================================== */

    if (
        isElevated(inattention) &&
        isElevated(hyperactivity)
    ) {

        recommendations += `

            <li>
                Where appropriate, coordinated school and home
                support may be considered to address attention
                regulation, task completion, activity level, and
                impulse control consistently across settings.
            </li>

        `;

    }


    /* ========================================================
       INATTENTION + OPPOSITION
       ======================================================== */

    if (
        isElevated(inattention) &&
        isElevated(opposition) &&
        !isElevated(hyperactivity)
    ) {

        recommendations += `

            <li>
                Attention-related difficulties and behavioural
                responses should be considered together. Adults
                may use clear task expectations, predictable
                routines, advance preparation for transitions,
                positive reinforcement, and opportunities for
                appropriate choice to reduce avoidable conflict
                around task demands.
            </li>

        `;

    }


    /* ========================================================
       HYPERACTIVITY + OPPOSITION
       ======================================================== */

    if (
        isElevated(hyperactivity) &&
        isElevated(opposition) &&
        !isElevated(inattention)
    ) {

        recommendations += `

            <li>
                Behavioural intervention may particularly focus on
                impulse control, emotional regulation, compliance
                with expectations, structured routines, and
                reinforcement of appropriate behaviour across
                home and school environments.
            </li>

        `;

    }


    /* ========================================================
       ALL THREE DOMAINS
       ======================================================== */

    if (
        isElevated(inattention) &&
        isElevated(hyperactivity) &&
        isElevated(opposition)
    ) {

        recommendations += `

            <li>
                Given the elevation across multiple domains,
                coordinated support across home and school settings
                may be beneficial, with attention to academic
                demands, behavioural regulation, task completion,
                impulse control, and positive behaviour management.
            </li>

        `;

    }


    /* ========================================================
       PROFESSIONAL ASSESSMENT RECOMMENDATION
       --------------------------------------------------------
       APPROVED WORDING
       ======================================================== */

    if (anyElevation) {

        recommendations += `

            <li>
                Where clinically indicated, further assessment by
                a qualified <strong>Rehabilitation Psychologist</strong>
                or <strong>Clinical Psychologist</strong> is
                recommended to clarify the nature and functional
                impact of the reported difficulties and to guide
                individualized intervention planning.
            </li>

            <li>
                Assessment may be sought through an appropriate
                professional service, including
                <strong>Little Stars &amp; She (Kondapur)</strong>
                or <strong>NIEPID, Secunderabad</strong>.
            </li>

        `;

    }


    /* ========================================================
       NO ELEVATION
       ======================================================== */

    if (!anyElevation) {

        recommendations += `

            <li>
                Continue to monitor the child's academic,
                behavioural, social, and functional performance.
                Routine classroom and environmental supports may
                be provided according to the child's needs.
            </li>

        `;

    }


    return recommendations;

}


/* ============================================================
   GENERATE PSYCHOLOGICAL REPORT
   ============================================================ */

function generateReport() {

    const resultsSection =
        document.getElementById(
            "resultsSection"
        );


    if (
        !resultsSection ||
        resultsSection.classList.contains("hidden")
    ) {

        alert(
            "Please calculate the SNAP-IV scores before generating the report."
        );

        return;

    }


    const childName =
        getFieldValue("childName");

    const uid =
        getFieldValue("uid");

    const childClass =
        getFieldValue("className");

    const schoolName =
        getFieldValue("schoolName");

    const gender =
        getFieldValue("gender");

    const assessmentDate =
        getFieldValue("assessmentDate");


    const inattentionScore =
        getText("inattentionScore");

    const inattentionMean =
        getText("inattentionMean");

    const inattentionSeverity =
        getText("inattentionSeverity");


    const hyperactivityScore =
        getText("hyperactivityScore");

    const hyperactivityMean =
        getText("hyperactivityMean");

    const hyperactivitySeverity =
        getText("hyperactivitySeverity");


    const oppositionScore =
        getText("oppositionScore");

    const oppositionMean =
        getText("oppositionMean");

    const oppositionSeverity =
        getText("oppositionSeverity");


    const totalScore =
        Number(inattentionScore) +
        Number(hyperactivityScore) +
        Number(oppositionScore);


    const anyElevation =
        isElevated(inattentionSeverity) ||
        isElevated(hyperactivitySeverity) ||
        isElevated(oppositionSeverity);


    const interpretation =
        buildClinicalImpression(
            inattentionSeverity,
            hyperactivitySeverity,
            oppositionSeverity
        );


    const recommendations =
        buildRecommendations(
            inattentionSeverity,
            hyperactivitySeverity,
            oppositionSeverity,
            anyElevation
        );


    const reportHTML = `

        <div class="report-title">
            Psychological Screening &amp; Assessment Report
        </div>


        <table class="report-info-table">

            <tr>

                <td class="report-info-label">
                    Name:
                </td>

                <td>
                    ${escapeHTML(childName)}
                </td>

                <td class="report-info-label">
                    UID:
                </td>

                <td>
                    ${escapeHTML(uid)}
                </td>

            </tr>


            <tr>

                <td class="report-info-label">
                    Class:
                </td>

                <td>
                    ${escapeHTML(childClass)}
                </td>

                <td class="report-info-label">
                    School Name:
                </td>

                <td>
                    ${escapeHTML(schoolName)}
                </td>

            </tr>

        </table>


        <p class="report-paragraph">

            During <strong>Choice Foundation's Psychological
            Screening Program</strong> conducted at the school
            premises, <strong>${escapeHTML(childName)}</strong>
            underwent psychological screening. Based on the
            screening process, relevant assessment tools were
            administered, and the findings are presented below.

        </p>


        <div class="report-heading">
            Tests Conducted:
        </div>


        <div class="test-conducted">

            ☐
            <strong>
                Swanson, Nolan, and Pelham Rating Scale –
                Fourth Edition (SNAP-IV)
            </strong>

        </div>


        <div class="report-heading">
            Test Results:
        </div>


        <table class="report-results-table">

            <thead>

                <tr>

                    <th>Assessment</th>
                    <th>Score</th>
                    <th>Findings</th>

                </tr>

            </thead>


            <tbody>

                <tr>

                    <td>
                        SNAP-IV Total
                    </td>

                    <td>
                        ${totalScore} / 78
                    </td>

                    <td>
                        ${getOverallFinding(
                            inattentionSeverity,
                            hyperactivitySeverity,
                            oppositionSeverity
                        )}
                    </td>

                </tr>


                <tr>

                    <td>
                        Inattention
                    </td>

                    <td>
                        ${inattentionScore} / 27
                    </td>

                    <td>
                        ${inattentionSeverity}
                        <br>
                        Mean: ${inattentionMean}
                    </td>

                </tr>


                <tr>

                    <td>
                        Hyperactivity / Impulsivity
                    </td>

                    <td>
                        ${hyperactivityScore} / 27
                    </td>

                    <td>
                        ${hyperactivitySeverity}
                        <br>
                        Mean: ${hyperactivityMean}
                    </td>

                </tr>


                <tr>

                    <td>
                        Oppositional Defiant Symptoms
                    </td>

                    <td>
                        ${oppositionScore} / 24
                    </td>

                    <td>
                        ${oppositionSeverity}
                        <br>
                        Mean: ${oppositionMean}
                    </td>

                </tr>

            </tbody>

        </table>


        <div class="report-heading">
            Interpretation:
        </div>


        <div class="report-interpretation">
            ${interpretation}
        </div>


        <div class="report-heading">
            Recommendation:
        </div>


        <div class="report-recommendations">

            <ul>
                ${recommendations}
            </ul>

        </div>


        <div class="report-disclaimer">

            <strong>Disclaimer:</strong>

            This report has been prepared solely for
            informational and educational purposes based on
            the assessment conducted by Choice Foundation in
            a non-commercial setting. It is not intended for
            use in psycho-legal, medico-legal, or judicial
            proceedings and should not be considered a legal
            or forensic opinion. Choice Foundation accepts no
            responsibility or liability for the use or
            interpretation of this report in legal,
            medico-legal, or other contexts beyond its
            intended purpose.

        </div>


        <table class="report-signature-table">

            <tr>

                <td>

                    Report Issued By:<br>

                    <span class="signature-name">
                        K. Dharmalinga Chaitanya
                    </span><br>

                    M.A(Psy), M.Phil. (Rehab Psy)<br>

                    Rehabilitation Psychologist<br>

                    Choice Foundation CRR No: A91575

                    <div class="organization-contact">

                        <strong>CHOICE FOUNDATION</strong><br>

                        3rd floor, Door No. 2-20/4,
                        Kothaguda X Roads,
                        Hanuman Nagar, Kondapur,
                        Land Mark Residency,
                        Kothaguda,
                        Hyderabad-500084,
                        Telangana<br>

                        Call: +91 99081 62303&nbsp;&nbsp;&nbsp;
                        Email: info@choicefoundation.in

                    </div>

                </td>


                <td>

                    Assessed By:<br>

                    <span class="signature-name">
                        Athira
                    </span><br>

                    M.Sc (Applied Psychology)<br>

                    Counselling Psychologist<br>

                    Choice Foundation

                </td>

            </tr>

        </table>

    `;


    const reportContainer =
        document.getElementById(
            "generatedReport"
        );


    if (!reportContainer) {

        alert(
            "Report container was not found in index.html."
        );

        return;

    }


    reportContainer.innerHTML =
        reportHTML;


    const reportSection =
        document.getElementById(
            "reportSection"
        );


    if (reportSection) {

        reportSection.classList.remove(
            "hidden"
        );

        reportSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* ============================================================
   PRINT STYLE INJECTION
   ============================================================ */

function injectSnapPrintStyles() {

    const existing =
        document.getElementById(
            "snapPrintStyles"
        );

    if (existing) {
        existing.remove();
    }


    const style =
        document.createElement("style");

    style.id =
        "snapPrintStyles";


    style.textContent = `

        @page {

            size: A4 portrait;

            margin:
                12mm
                13mm
                12mm
                13mm;

        }


        * {
            box-sizing: border-box;
        }


        body.snap-print-active {

            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;

        }


        body.snap-print-active
        > *:not(#snapPrintDocument) {

            display: none !important;

        }


        #snapPrintDocument {

            display: block !important;

            width: 100%;

            margin: 0;

            padding: 0;

            background: #ffffff;

            color: #111111;

            font-family:
                Georgia,
                "Times New Roman",
                serif;

            font-size: 11pt;

            line-height: 1.42;

        }


        .snap-print-page {

            width: 100%;

            min-height:
                calc(297mm - 24mm);

            position: relative;

            background: #ffffff;

        }


        .snap-print-page + .snap-print-page {

            break-before: page;

            page-break-before: always;

        }


        .snap-assessment-page {

            font-family:
                Arial,
                Helvetica,
                sans-serif;

            font-size: 8.6pt;

            line-height: 1.2;

        }


        .snap-assessment-header {

            border-bottom:
                1px solid #b8c7d9;

            padding-bottom: 4mm;

            margin-bottom: 4mm;

        }


        .snap-assessment-title {

            font-size: 16pt;

            font-weight: 700;

            color: #173f6b;

            margin-bottom: 1mm;

        }


        .snap-assessment-subtitle {

            font-size: 9pt;

            color: #555555;

        }


        .snap-child-info {

            width: 100%;

            border-collapse: collapse;

            margin-bottom: 4mm;

        }


        .snap-child-info td {

            border:
                1px solid #c9d1d9;

            padding:
                1.8mm
                2.2mm;

            vertical-align: top;

        }


        .snap-child-info .label {

            width: 14%;

            font-weight: 700;

            background: #f3f6f9;

            color: #1d3957;

        }


        .snap-child-info .value {
            width: 36%;
        }


        .snap-response-guide {

            border:
                1px solid #cbd5df;

            background: #f7f9fb;

            padding:
                2mm
                2.5mm;

            margin-bottom: 3mm;

            font-size: 8.2pt;

        }


        .snap-response-guide strong {
            color: #173f6b;
        }


        .snap-assessment-table {

            width: 100%;

            border-collapse: collapse;

            table-layout: fixed;

        }


        .snap-assessment-table th {

            background: #eaf0f6;

            color: #173f6b;

            border:
                1px solid #aebbc8;

            padding:
                1.5mm
                1.8mm;

            font-weight: 700;

            text-align: left;

        }


        .snap-assessment-table td {

            border:
                1px solid #c7ced5;

            padding:
                1.35mm
                1.7mm;

            vertical-align: top;

        }


        .snap-assessment-table
        .number {

            width: 7%;

            text-align: center;

            font-weight: 700;

        }


        .snap-assessment-table
        .item {

            width: 73%;

        }


        .snap-assessment-table
        .response {

            width: 20%;

            text-align: center;

            font-weight: 600;

            white-space: nowrap;

        }


        .snap-domain-row td {

            background: #f0f4f8;

            color: #173f6b;

            font-weight: 700;

            padding-top: 1.6mm;

            padding-bottom: 1.6mm;

        }


        .snap-assessment-footer {

            margin-top: 3mm;

            padding-top: 2mm;

            border-top:
                1px solid #cbd5df;

            text-align: center;

            font-size: 7.5pt;

            color: #666666;

        }


        .snap-report-page {

            font-family:
                Georgia,
                "Times New Roman",
                serif;

            font-size: 11pt;

            line-height: 1.42;

        }


        .snap-report-logo {

            display: block;

            width: 150mm;

            max-width: 78%;

            height: auto;

            margin:
                0 auto
                5mm
                auto;

        }


        .snap-report-rule {

            border-top:
                1px solid #6e7781;

            margin-bottom: 7mm;

        }


        .snap-report-title {

            text-align: center;

            font-size: 17pt;

            font-weight: 700;

            color: #111111;

            margin:
                0
                0
                5mm
                0;

        }


        .snap-report-info {

            width: 100%;

            border-collapse: collapse;

            margin-bottom: 6mm;

            font-size: 10.5pt;

        }


        .snap-report-info td {

            border:
                1px solid #c8cdd2;

            padding:
                2.2mm
                2.5mm;

            vertical-align: middle;

        }


        .snap-report-info
        .label {

            width: 12%;

            font-weight: 700;

            background: #f7f7f7;

        }


        .snap-report-info
        .value {
            width: 38%;
        }


        .snap-report-paragraph {

            text-align: justify;

            margin:
                0
                0
                5mm
                0;

        }


        .snap-report-heading {

            font-size: 12.5pt;

            font-weight: 700;

            margin:
                5mm
                0
                2.5mm
                0;

        }


        .snap-test {

            margin:
                0
                0
                4mm
                5mm;

        }


        .snap-results-table {

            width: 100%;

            border-collapse: collapse;

            border:
                1px solid #333333;

            margin-bottom: 5mm;

            table-layout: fixed;

            font-size: 10pt;

        }


        .snap-results-table th {

            border:
                1px solid #222222;

            padding:
                2.3mm
                2mm;

            text-align: center;

            font-weight: 700;

            background: #fafafa;

        }


        .snap-results-table td {

            border:
                1px solid #333333;

            padding:
                2.7mm
                2.5mm;

            vertical-align: top;

        }


        .snap-results-table th:nth-child(1),
        .snap-results-table td:nth-child(1) {
            width: 26%;
        }


        .snap-results-table th:nth-child(2),
        .snap-results-table td:nth-child(2) {

            width: 16%;

            text-align: center;

        }


        .snap-results-table th:nth-child(3),
        .snap-results-table td:nth-child(3) {
            width: 58%;
        }


        .snap-interpretation {

            text-align: justify;

            margin-bottom: 4mm;

        }


        .snap-interpretation p {

            margin:
                0
                0
                3mm
                0;

        }


        .snap-recommendations {

            margin:
                0
                0
                4mm
                0;

            padding-left: 7mm;

        }


        .snap-recommendations li {

            margin-bottom: 3mm;

            text-align: justify;

        }


        .snap-disclaimer {

            font-size: 8.4pt;

            line-height: 1.25;

            text-align: justify;

            margin-top: 7mm;

            padding-top: 3mm;

            border-top:
                1px solid #999999;

        }


        .snap-signatures {

            width: 100%;

            border-collapse: collapse;

            margin-top: 13mm;

            font-size: 10.5pt;

        }


        .snap-signatures td {

            width: 50%;

            vertical-align: top;

            padding-right: 8mm;

        }


        .snap-signature-name {

            display: inline-block;

            margin-top: 1mm;

            color: #1769aa;

            font-weight: 700;

            font-size: 11.5pt;

        }


        .snap-signature-line {

            color: #1769aa;

            font-weight: 700;

        }


        .snap-contact {

            margin-top: 4mm;

            font-size: 8.5pt;

            line-height: 1.3;

        }


        .snap-report-continuation {
            padding-top: 1mm;
        }


        .snap-report-continuation
        .snap-report-logo {
            margin-bottom: 5mm;
        }


        .snap-report-page table {

            break-inside: avoid;

            page-break-inside: avoid;

        }


        .snap-report-page
        .snap-signatures {

            break-inside: avoid;

            page-break-inside: avoid;

        }


        @media print {

            body {

                -webkit-print-color-adjust: exact;

                print-color-adjust: exact;

            }

            #snapPrintDocument {

                display: block !important;

            }

        }

    `;


    document.head.appendChild(style);

}


/* ============================================================
   BUILD PRINT DOCUMENT
   ============================================================ */

function buildSnapPrintDocument() {

    const existing =
        document.getElementById(
            "snapPrintDocument"
        );

    if (existing) {
        existing.remove();
    }


    const childName =
        getFieldValue("childName");

    const uid =
        getFieldValue("uid");

    const childClass =
        getFieldValue("className");

    const schoolName =
        getFieldValue("schoolName");

    const gender =
        getFieldValue("gender");

    const assessmentDate =
        getFieldValue("assessmentDate");


    const inattentionScore =
        getText("inattentionScore");

    const inattentionMean =
        getText("inattentionMean");

    const inattentionSeverity =
        getText("inattentionSeverity");


    const hyperactivityScore =
        getText("hyperactivityScore");

    const hyperactivityMean =
        getText("hyperactivityMean");

    const hyperactivitySeverity =
        getText("hyperactivitySeverity");


    const oppositionScore =
        getText("oppositionScore");

    const oppositionMean =
        getText("oppositionMean");

    const oppositionSeverity =
        getText("oppositionSeverity");


    const totalScore =
        Number(inattentionScore) +
        Number(hyperactivityScore) +
        Number(oppositionScore);


    const anyElevation =
        isElevated(inattentionSeverity) ||
        isElevated(hyperactivitySeverity) ||
        isElevated(oppositionSeverity);


    const interpretation =
        buildClinicalImpression(
            inattentionSeverity,
            hyperactivitySeverity,
            oppositionSeverity
        );


    const recommendations =
        buildRecommendations(
            inattentionSeverity,
            hyperactivitySeverity,
            oppositionSeverity,
            anyElevation
        );


    /* ========================================================
       BUILD ASSESSMENT RESPONSE TABLE
       ======================================================== */

    let assessmentRows = "";

    let previousDomain = "";


    snapItems.forEach(function(item) {

        if (item.domain !== previousDomain) {

            previousDomain =
                item.domain;

            const domain =
                domainInformation[
                    item.domain
                ];


            assessmentRows += `

                <tr class="snap-domain-row">

                    <td colspan="3">

                        ${escapeHTML(
                            domain.title
                        )}

                    </td>

                </tr>

            `;

        }


        const selected =
            document.querySelector(
                'input[name="snapItem_' +
                item.number +
                '"]:checked'
            );


        let responseValue = "—";

        let responseLabel = "Not answered";


        if (selected) {

            responseValue =
                selected.value;

            const option =
                responseOptions.find(
                    function(opt) {

                        return String(
                            opt.value
                        ) === String(
                            selected.value
                        );

                    }
                );


            if (option) {
                responseLabel =
                    option.label;
            }

        }


        assessmentRows += `

            <tr>

                <td class="number">
                    ${item.number}
                </td>

                <td class="item">
                    ${escapeHTML(
                        item.text
                    )}
                </td>

                <td class="response">

                    ${escapeHTML(
                        responseValue
                    )}
                    –
                    ${escapeHTML(
                        responseLabel
                    )}

                </td>

            </tr>

        `;

    });


    /* ========================================================
       REPORT PAGE
       ======================================================== */

    const reportPageHTML = `

        <section class="snap-print-page snap-report-page">

            <img
                class="snap-report-logo"
                src="choice-foundation-logo.png"
                alt="Choice Foundation"
            >


            <div class="snap-report-rule"></div>


            <div class="snap-report-title">

                Psychological Screening &amp;
                Assessment Report

            </div>


            <table class="snap-report-info">

                <tr>

                    <td class="label">
                        Name:
                    </td>

                    <td class="value">
                        <strong>
                            ${escapeHTML(childName)}
                        </strong>
                    </td>

                    <td class="label">
                        UID:
                    </td>

                    <td class="value">
                        ${escapeHTML(uid)}
                    </td>

                </tr>


                <tr>

                    <td class="label">
                        Class:
                    </td>

                    <td class="value">
                        ${escapeHTML(childClass)}
                    </td>

                    <td class="label">
                        School Name:
                    </td>

                    <td class="value">
                        ${escapeHTML(schoolName)}
                    </td>

                </tr>

            </table>


            <p class="snap-report-paragraph">

                During
                <strong>
                    Choice Foundation's Psychological
                    Screening Program
                </strong>
                conducted at the school premises,
                <strong>
                    ${escapeHTML(childName)}
                </strong>
                underwent psychological screening.
                Based on the screening process, relevant
                assessment tools were administered, and the
                findings are presented below.

            </p>


            <div class="snap-report-heading">
                Tests Conducted:
            </div>


            <div class="snap-test">

                ☐
                <strong>
                    Swanson, Nolan, and Pelham Rating Scale –
                    Fourth Edition (SNAP-IV)
                </strong>

            </div>


            <div class="snap-report-heading">
                Test Results:
            </div>


            <table class="snap-results-table">

                <thead>

                    <tr>

                        <th>
                            Assessment
                        </th>

                        <th>
                            Score
                        </th>

                        <th>
                            Findings
                        </th>

                    </tr>

                </thead>


                <tbody>

                    <tr>

                        <td>
                            SNAP-IV Total
                        </td>

                        <td>
                            ${totalScore} / 78
                        </td>

                        <td>
                            ${getOverallFinding(
                                inattentionSeverity,
                                hyperactivitySeverity,
                                oppositionSeverity
                            )}
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Inattention
                        </td>

                        <td>
                            ${escapeHTML(
                                inattentionScore
                            )} / 27
                        </td>

                        <td>

                            <strong>
                                ${escapeHTML(
                                    inattentionSeverity
                                )}
                            </strong>

                            <br>

                            Mean:
                            ${escapeHTML(
                                inattentionMean
                            )}

                        </td>

                    </tr>


                    <tr>

                        <td>
                            Hyperactivity /
                            Impulsivity
                        </td>

                        <td>
                            ${escapeHTML(
                                hyperactivityScore
                            )} / 27
                        </td>

                        <td>

                            <strong>
                                ${escapeHTML(
                                    hyperactivitySeverity
                                )}
                            </strong>

                            <br>

                            Mean:
                            ${escapeHTML(
                                hyperactivityMean
                            )}

                        </td>

                    </tr>


                    <tr>

                        <td>
                            Oppositional
                            Defiant Symptoms
                        </td>

                        <td>
                            ${escapeHTML(
                                oppositionScore
                            )} / 24
                        </td>

                        <td>

                            <strong>
                                ${escapeHTML(
                                    oppositionSeverity
                                )}
                            </strong>

                            <br>

                            Mean:
                            ${escapeHTML(
                                oppositionMean
                            )}

                        </td>

                    </tr>

                </tbody>

            </table>


            <div class="snap-report-heading">
                Interpretation:
            </div>


            <div class="snap-interpretation">

                ${interpretation}

            </div>


            <div class="snap-report-heading">
                Recommendation:
            </div>


            <div class="snap-recommendations">

                <ul>

                    ${recommendations}

                </ul>

            </div>


            <div class="snap-disclaimer">

                <strong>
                    Disclaimer:
                </strong>

                This report has been prepared solely for
                informational and educational purposes based
                on the assessment conducted by Choice
                Foundation in a non-commercial setting. It is
                not intended for use in psycho-legal,
                medico-legal, or judicial proceedings and
                should not be considered a legal or forensic
                opinion. Choice Foundation accepts no
                responsibility or liability for the use or
                interpretation of this report in legal,
                medico-legal, or other contexts beyond its
                intended purpose.

            </div>


            <table class="snap-signatures">

                <tr>

                    <td>

                        Report Issued By:

                        <br>

                        <span class="snap-signature-name">
                            K. Dharmalinga Chaitanya
                        </span>

                        <br>

                        <span class="snap-signature-line">
                            M.A(Psy), M.Phil. (Rehab Psy)
                        </span>

                        <br>

                        <span class="snap-signature-line">
                            Rehabilitation Psychologist
                        </span>

                        <br>

                        <span class="snap-signature-line">
                            Choice Foundation CRR No: A91575
                        </span>


                        <div class="snap-contact">

                            <strong>
                                CHOICE FOUNDATION
                            </strong>

                            <br>

                            3rd floor, Door No. 2-20/4,
                            Kothaguda X Roads,
                            Hanuman Nagar, Kondapur,
                            Land Mark Residency,
                            Kothaguda,
                            Hyderabad-500084,
                            Telangana

                            <br>

                            Call:
                            +91 99081 62303

                            &nbsp;&nbsp;&nbsp;

                            Email:
                            info@choicefoundation.in

                        </div>

                    </td>


                    <td>

                        Assessed By:

                        <br>

                        <span class="snap-signature-name">
                            Athira
                        </span>

                        <br>

                        <span class="snap-signature-line">
                            M.Sc (Applied Psychology)
                        </span>

                        <br>

                        <span class="snap-signature-line">
                            Counselling Psychologist
                        </span>

                        <br>

                        <span class="snap-signature-line">
                            Choice Foundation
                        </span>

                    </td>

                </tr>

            </table>

        </section>

    `;


    /* ========================================================
       CREATE PRINT DOCUMENT
       ======================================================== */

    const printDocument =
        document.createElement("div");

    printDocument.id =
        "snapPrintDocument";


    printDocument.innerHTML = `

        <section
            class="snap-print-page
                   snap-assessment-page"
        >

            <div class="snap-assessment-header">

                <div class="snap-assessment-title">
                    SNAP-IV 26-Item Rating Scale
                </div>

                <div class="snap-assessment-subtitle">
                    Assessment Record
                </div>

            </div>


            <table class="snap-child-info">

                <tr>

                    <td class="label">
                        Child Name
                    </td>

                    <td class="value">
                        ${escapeHTML(childName)}
                    </td>

                    <td class="label">
                        UID / Case ID
                    </td>

                    <td class="value">
                        ${escapeHTML(uid)}
                    </td>

                </tr>


                <tr>

                    <td class="label">
                        Class
                    </td>

                    <td class="value">
                        ${escapeHTML(childClass)}
                    </td>

                    <td class="label">
                        Gender
                    </td>

                    <td class="value">
                        ${escapeHTML(gender)}
                    </td>

                </tr>


                <tr>

                    <td class="label">
                        School
                    </td>

                    <td class="value">
                        ${escapeHTML(schoolName)}
                    </td>

                    <td class="label">
                        Date
                    </td>

                    <td class="value">
                        ${escapeHTML(
                            formatDate(
                                assessmentDate
                            )
                        )}
                    </td>

                </tr>

            </table>


            <div class="snap-response-guide">

                <strong>
                    Response Guide:
                </strong>

                &nbsp;&nbsp;

                0 = Not at all

                &nbsp;&nbsp; | &nbsp;&nbsp;

                1 = Just a little

                &nbsp;&nbsp; | &nbsp;&nbsp;

                2 = Quite a bit

                &nbsp;&nbsp; | &nbsp;&nbsp;

                3 = Very much

            </div>


            <table class="snap-assessment-table">

                <thead>

                    <tr>

                        <th class="number">
                            No.
                        </th>

                        <th class="item">
                            SNAP-IV Item
                        </th>

                        <th class="response">
                            Response
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${assessmentRows}

                </tbody>

            </table>


            <div class="snap-assessment-footer">

                SNAP-IV 26-Item Rating Scale —
                Assessment Record

            </div>

        </section>


        ${reportPageHTML}

    `;


    document.body.appendChild(
        printDocument
    );


    return printDocument;

}


/* ============================================================
   PRINT / SAVE AS PDF
   ============================================================ */

function printReport() {

    const resultsSection =
        document.getElementById(
            "resultsSection"
        );


    if (
        !resultsSection ||
        resultsSection.classList.contains("hidden")
    ) {

        alert(
            "Please calculate the SNAP-IV scores before printing the report."
        );

        return;

    }


    const unansweredItems = [];


    snapItems.forEach(function(item) {

        const selected =
            document.querySelector(
                'input[name="snapItem_' +
                item.number +
                '"]:checked'
            );


        if (!selected) {

            unansweredItems.push(
                item.number
            );

        }

    });


    if (unansweredItems.length > 0) {

        highlightUnanswered(
            unansweredItems
        );


        alert(
            "Please answer all SNAP-IV items before printing.\n\n" +
            "Unanswered item(s): " +
            unansweredItems.join(", ")
        );

        return;

    }


    clearUnansweredHighlights();


    injectSnapPrintStyles();


    const printDocument =
        buildSnapPrintDocument();


    if (!printDocument) {

        alert(
            "Unable to prepare the print document."
        );

        return;

    }


    document.body.classList.add(
        "snap-print-active"
    );


    const logo =
        printDocument.querySelector(
            ".snap-report-logo"
        );


    const startPrint =
        function() {

            setTimeout(
                function() {

                    window.print();

                },
                300
            );

        };


    if (
        logo &&
        !logo.complete
    ) {

        logo.onload =
            startPrint;

        logo.onerror =
            function() {

                console.warn(
                    "Choice Foundation logo could not be loaded. " +
                    "Check that choice-foundation-logo.png is in " +
                    "the same folder as index.html."
                );

                startPrint();

            };

    }

    else {

        startPrint();

    }


    window.onafterprint =
        function() {

            document.body.classList.remove(
                "snap-print-active"
            );


            const printDoc =
                document.getElementById(
                    "snapPrintDocument"
                );


            if (printDoc) {
                printDoc.remove();
            }


            const printStyles =
                document.getElementById(
                    "snapPrintStyles"
                );


            if (printStyles) {
                printStyles.remove();
            }


            window.onafterprint =
                null;

        };

}


/* ============================================================
   PAGE INITIALIZATION
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        generateItems();


        const dateField =
            document.getElementById(
                "assessmentDate"
            );


        if (
            dateField &&
            !dateField.value
        ) {

            const today =
                new Date();


            const year =
                today.getFullYear();


            const month =
                String(
                    today.getMonth() + 1
                ).padStart(
                    2,
                    "0"
                );


            const day =
                String(
                    today.getDate()
                ).padStart(
                    2,
                    "0"
                );


            dateField.value =
                year +
                "-" +
                month +
                "-" +
                day;

        }

    }
);