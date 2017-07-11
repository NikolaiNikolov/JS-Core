function getModule() {
    let id = 0;
    let reports = [];

    return {
        report,
        setStatus,
        remove,
        sort,
        output,
    };

    function report(author, description, reproducible, severity) {
        let report = {
            ID: id,
            author: author,
            description: description,
            reproducible: reproducible,
            severity: severity,
            status: 'Open'
        };
        reports.push(report);
        id++;
    }
    function setStatus(id, newStatus) {
        reports.find(o => o.ID === id).status = newStatus;
    }
    function remove(id) {
        reports.splice(reports.indexOf(reports.find(o => o.ID === id)), 1);
    }
    function sort(method) {
        let func;
        switch (method) {
            case 'author':
                func = (a,b) => a.author.localeCompare(b.author);
                break;
            case 'severity':
                func = (a,b) => a.severity - b.severity;
                break;
            case 'ID':
                func = (a,b) => a.ID - b.ID;
                break;
        }
        reports.sort(func);
    }
    function output(selector) {
        selector = $(selector);
        selector.empty();
        for (report of reports) {
            let reportHtml = ($(`<div id="report_${report.ID}" class="report"></div>`)
                .append($(`<div class="body"></div>`).append($(`<p>${report.description}</p>`))));
            reportHtml.append($(`<div class="title"></div>`).append($(`<span class="author">Submitted by: ${report.author}</span>`))
                .append($(`<span class="status">${report.status} | ${report.severity}</span>`)));
            selector.append(reportHtml);
        }
    }
}